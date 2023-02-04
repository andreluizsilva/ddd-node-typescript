FROM node:latest as build

WORKDIR /usr/src/app

RUN npm i -g npm@9.4.1 && \
    npm i -g typescript
RUN npx tsc --init 
RUN npm i tslint --save-dev
RUN npx tslint --init 
RUN npm i -D jest @types/jest ts-node --save-dev && \
    npm i -D @swc/jest @swc/cli @swc/core && \
    npm i uuid @types/uuid && \
    npm i sequelize reflect-metadata sequelize-typescript
RUN apt update && apt install sqlite3


COPY . .

FROM node:slim

WORKDIR /usr/src/app
COPY --from=build /usr/src/app .
RUN npm i -g npm@9.4.1 && \
    npm i -g typescript

CMD ["npm", "test"]