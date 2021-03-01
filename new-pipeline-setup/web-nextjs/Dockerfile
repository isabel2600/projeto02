FROM node:latest
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN yarn install && \
   yarn add next react react-dom && \ 
   yarn build
EXPOSE 3000
CMD ["yarn", "start"]