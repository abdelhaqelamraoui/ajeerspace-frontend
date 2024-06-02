FROM node:latest

WORKDIR /app/react-app

COPY package*.json .

COPY . .

EXPOSE 3000

# for issue with  openssl
# RUN export NODE_OPTIONS=--openssl-legacy-provider

RUN npm install

CMD ["npm", "start"]

