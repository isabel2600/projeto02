FROM node:8.17.0

WORKDIR . /app

COPY package*.json ./

RUN npm i -g @adonisjs/cli
RUN npm install
ENV TZ=America/Sao_Paulo

RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY . .

EXPOSE 3334

CMD [ "npm", "start"] 