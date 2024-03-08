FROM node:20

RUN mkdir app

WORKDIR app

COPY dist ./

EXPOSE 8080

RUN npm install -g serve

CMD ["serve", "-s", ".", "-l", "8080"]