FROM node:latest as build
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN yarn install && \
    yarn build

FROM nginx:alpine
COPY devops/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /home/app/build/ /usr/share/nginx/html/