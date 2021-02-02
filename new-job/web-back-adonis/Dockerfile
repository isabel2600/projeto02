FROM node:lts

RUN wget http://download.redis.io/redis-stable.tar.gz && \
    tar xvzf redis-stable.tar.gz && \
    cd redis-stable && \
    make && \
    make install && \
    cd ..

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install -g pm2 && \
    npm i -g @adonisjs/cli && \
    npm i --save pg sqlite3 mysql @adonisjs/ignitor && \
    npm install

COPY . /usr/src/app

RUN adonis migration:run

EXPOSE 3333 6379

CMD ["npm", "start"]