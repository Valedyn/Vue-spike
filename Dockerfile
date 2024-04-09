FROM node:20-alpine

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install
RUN npm run build

EXPOSE 8080

WORKDIR /app/dist
RUN npm install -g serve

CMD ["serve", "-s", ".", "-l", "8080"]