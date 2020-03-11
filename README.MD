##nodejs-docker simple project
we are going to create an app with express and bootstrap and a Docker image to the APP
we are going to use that image to build a container


#set the structure
we have a package.json file from where we get all author, licenses and installation through npm install

#create app.js file
that load the express module, the router and the ports


#create 2 pages
an index.html that links to other pages and
importing Bootstrap and creating a jumbotron component

a page2.html with more info

#create a view folder named view (sites-availables)
with the index.html, page2.html
#create a folder css with a styles.css


#we need to alow port 8080 to traffic in firewall
sudo ufw allow 8080

#INICIATE THE APP
node app.js

that should get
Example app listening on port 8080!


#CREATE DOCKERFILE
Dockerfile allow us scale and deploy the app  

#create d .dockerignore
to say which files and directory must not be copies to the container

#BUILD THE IMAGE - my docker hub username and tag the image
docker build -t victorgranados/nodejs-image .

#create the container
#assign port 88 -p
#execute as daemon -d (background process)
#assign a name --name
docker run --name nodejs-image -p 88:8080 -d victorgranados/nodejs-image
