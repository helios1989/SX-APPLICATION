FROM node:14
WORKDIR /app
COPY package.json package-lock.json /app/
RUN npm install
RUN npm install nodemon
RUN npm install ts-node
COPY src /app/src
COPY tsconfig.json tslint.json /app/
RUN npm install
ENV port=3000
EXPOSE 3000
CMD ["npm", "run", "dockerstart"]