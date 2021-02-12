FROM node:lts AS build
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN npm install && \
    npm run build

FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
COPY --from=build /home/app/build/ .