FROM node:16

RUN apt-get update && apt-get install sqlite3
RUN yarn add global @nestjs/cli@8.0.0

USER node

WORKDIR /home/node/app