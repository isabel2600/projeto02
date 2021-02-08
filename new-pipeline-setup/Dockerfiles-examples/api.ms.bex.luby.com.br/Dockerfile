FROM node:lts

RUN mkdir -p /home/app

COPY . /home/app

WORKDIR /home/app

RUN npm install

EXPOSE 3000

CMD ["yarn", "start"]

