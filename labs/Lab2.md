# Troubleshoot SAML

## Overview
In this lab exercise, you will troubleshoot unknown problems with a SAML configuration. The demo environment is already configured properly. So, the exercise will focus on how to use a SAML tracer extension to gather information.

## Prerequisites
Before you begin, you must first complete all of the previous lab exercises.

## Lab Exercise 2
1. In a web browser, install and enable a SAML Tracer extension.
    - Chrome: [SAML-tracer](https://chrome.google.com/webstore/detail/saml-tracer/mpdajninpobndbfcldcmbpnnbhibjmch)
    - Firefox: [SAML-tracer](https://addons.mozilla.org/en-US/firefox/addon/saml-tracer/)
1. If necessary, configure the extension so that it works in private/incognito mode.
1. Open a new private/incognito browser window.
1. Open the SAML Tracer extension. You should see it running in a separate window.
1. Navigate to the following URL: [http://localhost:3000](http://localhost:3000)
1. If necessary, clear any data already captured by the tracer.
1. Click **Log In**
1. A SAML Request will be sent to the identity provider. Review this request in the SAML Tracer.
1. Log in to the identity provider with the following credentials:
    - *username*: user1
    - *password*: user1pass
1. A SAML Response will be sent to the service provider. Review this response in the SAML Tracer.
1. Export the SAML data so that it can be attached to a support request.
    - Click **Export** and save the file to your local machine
    - For option *Select cookie-filter profile*, choose "None"
1. Can you identify the values for the following items in the SAML Request?
    - ID
    - Destination
    - AssertionConsumerServiceURL
    - Issuer
1. Can you identify the values for the following items in the SAML Response?
    - Destination
    - Issuer
    - X509Certificate
    - SPNameQualifier
    - All returned person attributes and values

---
**Lab Exercises:** [1](Lab1.md) | [2](Lab2.md) | [Help](Help.md)