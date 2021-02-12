FROM node:latest AS build
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN npm i -g next && \
   npm install && \
   next build && \
   next export

FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
COPY --from=build /home/app/build/ .