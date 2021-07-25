
# HOW TO RUN THE APP
- git clone https://github.com/helios1989/sx-application

steps to run localy
## PRE-REQUISITE
 - should have  nodejs  12+ above installed
 - should have  angular installed

### FRONTEND
- cd sx-app-frontend
- npm install
- ng serve
### TO RUN UNIT TEST
 - ng test or npm run test

### BACKEND
- cd sx-app-server
- npm install
- npm run start

- api base url: localhost:3000


### api localdocumenataion documentation;
- http://localhost:3000/docs/*

# TO run via docker
## PRE-REQUISITE
 - should have docker installed

in terminal under sx-application directory


### Docker Images
- https://hub.docker.com/repository/docker/vergelbarit/sx-app-server
- https://hub.docker.com/repository/docker/vergelbarit/sx-app-frontend

- docker-compose up


- Note: this docker is build in MACOS M1 os
- if in case the docker image was not downloaded you can also manually pull it using ./grab-image.sh

### WEB APP URL:
- frontend: https://sx-app-frontend.azurewebsites.net/
- backend:  https://verge-sx-app-api-service.azurewebsites.net

### Functionality:
 - Navigation
 - Clicking Menu icon shows menu
 - Menu items navigate to Member Search and Search Results
Form
 - Service Date and Policy Number is a required field
 - Policy Number should be a number
 - Navigation to Search Results page after click submit

---
 - I didn't add service date filter as i can't find in the requirement and also there is no reference in the response api. I am happy to adjust my code if this is    just a missing info.
