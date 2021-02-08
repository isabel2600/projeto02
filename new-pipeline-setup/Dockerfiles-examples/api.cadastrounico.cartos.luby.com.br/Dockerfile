FROM node:latest

WORKDIR . /app

COPY package*.json ./

RUN npm i -g @adonisjs/cli
RUN npm install

COPY . .

EXPOSE 3343

CMD [ "npm", "start"]


