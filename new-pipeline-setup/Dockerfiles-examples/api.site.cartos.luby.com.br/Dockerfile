FROM node:latest

WORKDIR . /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run migrations

EXPOSE 8080

CMD [ "npm", "start"]


