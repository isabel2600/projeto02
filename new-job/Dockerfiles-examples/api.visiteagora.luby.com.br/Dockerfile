FROM node:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm i -g @adonisjs/cli \
    && npm i --save pg sqlite3 mysql @adonisjs/ignitor

COPY . /usr/src/app

RUN adonis migration:run


EXPOSE 3340

CMD [ "npm", "start"]

