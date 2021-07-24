# HOW TO RUN THE APP
- git clone https://github.com/helios1989/sx-application

steps to run localy
## PRE-REQUISITE
 - install nodejs atleast 12+ above
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


### Functionality:
 - Navigation
 - Clicking Menu icon shows menu
 - Menu items navigate to Member Search and Search Results
Form
 - Service Date and Policy Number is a required field
 - Policy Number should be a number
 - Navigation to Search Results page after click submit

---


