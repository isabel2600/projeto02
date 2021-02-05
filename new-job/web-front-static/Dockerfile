FROM node:lts
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN yarn install && \
    yarn build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
COPY --from=0 ./home/app/build/ .