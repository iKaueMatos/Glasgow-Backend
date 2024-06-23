FROM node:18.18-alpine

WORKDIR /usr/app

COPY package.json package-lock.json ./

RUN rm -rf /src/node_modules
RUN rm -rf /src/package-lock.json

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
# CMD ["node", "--inspect=0.0.0.0:9229", "src/app/index.ts"]
