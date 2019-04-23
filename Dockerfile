FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild node-sass
RUN npm run build --prod