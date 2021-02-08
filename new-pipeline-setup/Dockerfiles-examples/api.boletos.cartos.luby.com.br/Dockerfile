ROM node:12

# Create app directory
WORKDIR /usr/src/bill.ms

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
RUN adonis migration:run
RUN adonis seed
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 8081
CMD [ "node", "server.js" ]