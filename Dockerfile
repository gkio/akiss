FROM node:8.6.0

WORKDIR /usr/

RUN npm install --quiet

COPY . .
