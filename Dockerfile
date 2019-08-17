FROM node:current-alpine

WORKDIR /server

COPY . /server

RUN npm install --silent

RUN npm audit fix --silent

EXPOSE 8080