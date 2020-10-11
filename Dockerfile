FROM node:alpine
WORKDIR /home/code
COPY package.json package.json  
RUN npm install --production

COPY server.js server.js  
EXPOSE 3000

CMD ["npm","start"]
