FROM node:12 AS build
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
RUN npm run buildProd

FROM nginx:1.15.8-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/sx-app-frontend /usr/share/nginx/html
