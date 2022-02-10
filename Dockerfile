FROM node:14

WORKDIR /test-backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4000 5432