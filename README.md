# HOW TO RUN THE APP
- git clone https://github.com/helios1989/sx-application

steps to run localy
## PRE-REQUISITE
 - install first nodejs atleast 12+ above
 - install angular

### FRONTEND
- cd sx-app-frontend
- npm install
- ng serve

### BACKEND
- cd sx-app-server
- npm install
- npm run start

- api base url: localhost:3000



### api localdocumenataion documentation;
- http://localhost:3000/docs/*

# TO run via docker
## PRE-REQUISITE
 - install docker

in terminal under sx-application directory
### grab the images:
- ./grab-images.sh

### Docker Images
- https://hub.docker.com/repository/docker/vergelbarit/sx-app-server
- https://hub.docker.com/repository/docker/vergelbarit/sx-app-frontend

- docker-compose up

-Note: this docker is build in MACOS M1 os

