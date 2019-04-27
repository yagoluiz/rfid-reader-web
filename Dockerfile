FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
RUN npm install --save-dev node-sass
RUN npm run build --prod