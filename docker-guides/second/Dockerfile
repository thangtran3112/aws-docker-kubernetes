FROM node:20-alpine

WORKDIR /app

# Or using absolute path: COPY package.json /app
# Use this to prevent rebuilding node_modules if package.json has not changed
COPY package.json .

# Step to be run only when the image is built
RUN npm install

# COPY the rest of the files, but not node_modules, which is built on previous step
# Or using absolute path: COPY . /app
COPY . .

EXPOSE 80

# This will only run during run phase, not in build phase
CMD [ "node", "server.js" ]