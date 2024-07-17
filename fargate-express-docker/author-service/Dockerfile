FROM node:12.4-alpine

# Create app directory

RUN mkdir /app
WORKDIR /app
RUN chmod -R +x /app

# RUN npm install
COPY package.json package.json
RUN npm install --production && mv node_modules /node_modules

# Bundle app source
COPY . .

LABEL maintainer="Thang Tran"

# EXPOSE 80
EXPOSE 3000

# Run application
CMD node index.js
