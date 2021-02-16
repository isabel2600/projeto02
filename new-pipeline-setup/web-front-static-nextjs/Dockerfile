FROM node:latest AS build
RUN mkdir -p /home/app
COPY . /home/app
WORKDIR /home/app
RUN yarn install && \
   yarn add --dev typescript @types/react @types/node && \
   yarn deploy

FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
COPY --from=build /home/app/out/ .

# in package.json do

# "scripts": {
#   "build": "next build && next export"
# }