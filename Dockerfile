FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm rebuild node-sass --force
RUN npm run build --prod