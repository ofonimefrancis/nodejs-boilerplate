FROM node:carbon

# Create app directory
RUN mkdir -p /usr/src/nodejs-boilerplate
WORKDIR /usr/src/nodejs-boilerplate

# Install app dependencies
COPY package*.json ./
RUN npm install
RUN npm install -g serve

# Bundle app source
COPY . /usr/src/nodejs-boilerplate

EXPOSE 4003
CMD [ "npm", "start" ]