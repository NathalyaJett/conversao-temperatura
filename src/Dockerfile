#IMERSÃOINICIATIVADEVOPS
#AUTOR:NATHALYA DE PAULO LEITE

FROM node:18.0.0
WORKDIR /app
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["node", "server.js"]