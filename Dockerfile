FROM node:latest

ENV PORT=8080
COPY . /var/www
WORKDIR /var/www

EXPOSE $PORT
ENTRYPOINT ["node", "app.js"]
