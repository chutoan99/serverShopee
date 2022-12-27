FROM node:16
EXPOSE 3000
WORKDIR /app
RUN npm i npm@latest -g
COPY package-lock.json package.json ./
RUN npm install
COPY . .
CMD ["node","index.js"]
docker tag local-image:tagname new-repo:tagname
docker push new-repo:tagname