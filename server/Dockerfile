FROM node:16-alpine

WORKDIR /app
COPY certs ./
COPY package*.json ./
RUN npm install --silent
COPY . .

CMD ["node","index.js"]