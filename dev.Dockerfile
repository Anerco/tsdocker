FROM node:current-alpine

WORKDIR /server

COPY . /server

RUN npm install --silent

RUN npm audit fix --silent

RUN npm test

EXPOSE 8080