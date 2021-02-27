FROM node:latest

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install

EXPOSE 3333

CMD ["node", "server.js"]