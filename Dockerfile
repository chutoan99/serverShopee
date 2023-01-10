FROM node:16

WORKDIR /app

COPY package*.json /app/

RUN npm install

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node","index.js"]
