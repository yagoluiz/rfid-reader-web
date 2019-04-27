FROM node:latest as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm install node-sass
RUN npm run build --prod

FROM nginx:alpine
COPY --from=node /app/dist/rfid-reader-web /usr/share/nginx/html