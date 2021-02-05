FROM apiabbiamolubycombr_web_2:latest

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/

RUN npm i -g @adonisjs/cli \
    && npm i --save pg sqlite3 mysql @adonisjs/ignitor \
   && npm install

COPY . /usr/src/app

RUN adonis migration:run

EXPOSE 3333 6379

CMD [ "npm", "start"]

