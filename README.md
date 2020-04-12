# Basic Information:

> This is a basic vue template. It uses typescript, webpack, node, and vue. 

> This template has a server and client folder. The server folder is a simple node/express server. This is used 
> to server up the index file. The client folder holds your client side application.

> **Includes**: vuex and vue router

# Pre Requirements Need:
- webpack installed
- node installed 


# HOW TO RUN APPLICATION

## To run ( Prod Mode ) console line: 
1. npm build
2. node dist/server.js
  - This will start an application listening on localhost:9000
  

## To Run ( Dev Mode ) console line:
1. npm start
  - This uses webpack-dev-server
  - This will auto open your default browser window. Then it will redirect to localhost:8080
  - Any edits made will be picked up and the browser will refesh to reload content.
