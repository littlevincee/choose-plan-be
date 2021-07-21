FROM node:16.5

# # RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /

#ENV NODE_ENV production

# # Install app dependencies
# # A wildcard is used to ensure both package.json AND package-lock.json are copied
# # where available (npm@5+)
COPY package.json .
COPY .sequelizerc .

# # USER node

RUN npm install
# # If you are building your code for production
# # RUN npm ci --only=production

COPY /dist ./

COPY /sequelizer ./sequelizer

# # Bundle app source
# # COPY --chown=node:node /dist .

CMD [ "node", "index.js" ]
EXPOSE 9000

