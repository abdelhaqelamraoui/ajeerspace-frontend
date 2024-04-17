FROM node:latest AS development

ENV NODE_ENV development

WORKDIR /app/react-app

COPY package.json .

COPY . .

EXPOSE 3000

# for issue with  openssl
# RUN export NODE_OPTIONS=--openssl-legacy-provider

RUN npm install

CMD ["npm", "start"]

