FROM node:20

# update to recommended npm version 
RUN npm install -g npm@10.9.0

WORKDIR /app

ENTRYPOINT [ "npm" ]
