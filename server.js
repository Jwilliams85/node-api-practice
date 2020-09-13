const express = require ('express');
//Express is a web application framework - it sits on top of Node web server module
//It is essentially React - but for the backend!
// It is going to add extra functionality (It goes on top of Node)
///like :
//Routing
//Middleware support
//A simple API
//What is NODE? It lets us run JavaScript outside of a browser- runtime environment 
const showsRouter = require("./data/shows/showsRouter")
const charactersRouter = require("./data/characters/charactersRouter")
//helmet is just middleware
//it can change the request or the response objects - but doesn't have to 
//helmet add headers for security to your request 

const helmet = require("helmet");
const server = express();
//making sure our sever is invoking express

server.use(express.json())
//making sure our server is using express 
server.use(helmet());

server.get("/", (req, res) => {
    res.status(200).json({message: "The server is online!"})//initial response 
})

server.use("/api/shows", showsRouter)
server.use("/api/characters", charactersRouter)
module.exports = server;