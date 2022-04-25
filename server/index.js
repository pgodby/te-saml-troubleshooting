// Server
const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');
// SAML
const passport = require('passport');
const saml = require('passport-saml');
// Utilities
const fs = require('fs');

/* ====================
    SAML (OMG)
==================== */

// serialize a user
passport.serializeUser((user, done) => {
    console.log("*** Serialize User");
    done(null, user);
});

// deserialize a user
passport.deserializeUser((user, done) => {
    console.log("*** Deserialize User");
    done(null, user);
});

// SAML configuration
const samlStrategy = new saml.Strategy({
    callbackUrl: "http://localhost:3000/login/callback",
    entryPoint: "http://localhost:8080/simplesaml/saml2/idp/SSOService.php",
    issuer: "te-saml",
    identifierFormat: null,
    cert: fs.readFileSync(__dirname + "/certs/idp_key.pem", "utf-8"),
    decryptionPvk: fs.readFileSync(__dirname + "/certs/key.pem", "utf-8"),
    privateCert: fs.readFileSync(__dirname + "/certs/key.pem", "utf-8"),
    validateInResponseTo: false,
    acceptedClockSkewMs: -1
}, function(profile, done) {
    return done(null, profile);
});

passport.use("samlStrategy", samlStrategy);

/* ====================
    Express
==================== */

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
   secret: 'shhhhhhhhhh',
   resave: false,
   saveUninitialized: true 
}));
app.use(passport.initialize({}));
app.use(passport.session({}));

// start the server
app.listen(3000, () => {
    console.log('Server listening on 3000');
});

/* ====================
    Routes
==================== */

// default home page
app.get("/", (req, res) => {
    res.status(200).send("Service Provider Home Page");
});

// redirect user to IDP login
app.get("/login", 
    function(req, res, next) {
        console.log("*** Login handler");
        next();
    },
    passport.authenticate("samlStrategy")
);

// redirect from IDP after authentication
app.post("/login/callback",
    function(req, res, next) {
        console.log("*** Login callback handler");
        next();
    },
    passport.authenticate("samlStrategy"),
    function(req, res) {
        console.log(JSON.stringify(req.user, null, 2));
        res.status(200).send("Login Callback Success");
    }
);

// metadata page
app.get("/metadata", (req, res) => {
    res.type("application/xml");
    res.status(200).send(
        samlStrategy.generateServiceProviderMetadata(
            fs.readFileSync(__dirname + "/certs/cert.pem", "utf-8"),
            fs.readFileSync(__dirname + "/certs/cert.pem", "utf-8")
        )
    );
});

// All other GET requests
app.get("*", (req, res) => {
    res.sendStatus(404);
});