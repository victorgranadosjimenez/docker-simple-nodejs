#create the image from node alpine version
FROM node:10-alpine

#create this directory to have permissions and set user node
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

#work directory, if not docker would create a default one
WORKDIR /home/node/app

#copy package.json & package-lock.json files (for npm 5+)
#we use COPY before npm instal to store docker cache
#in every creating stage docker look for cache for that instruction
#so if we change package.json there is no cache but if we dont change package.json docker use the cache and dont re-install
COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

#expose port 8080
EXPOSE 8080

#run the app
CMD [ "node", "app.js" ]
