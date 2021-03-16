FROM node:latest

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm i -g @adonisjs/cli \
    && npm i --save pg sqlite3 mysql @adonisjs/ignitor \
    && npm install

RUN adonis migration:run

EXPOSE 3333

CMD [ "npm", "start"]