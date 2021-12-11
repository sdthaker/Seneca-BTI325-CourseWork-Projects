/******************************************************************************
***
* BTI325 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
No part
* of this assignment has been copied manually or electronically from any other source
* (including 3rd party web sites) or distributed to other students.
*
* Name: Soham Thaker, Student ID: 011-748-159, Date: 25-10-2021
*
* Online (Heroku) Link: https://immense-castle-81687.herokuapp.com/
*
******************************************************************************
**/

//refactor the routes to put them in routes folder
const express = require('express')
const path = require('path')
const app = express();
const {initialize} = require('./data-service')

//PORT definition
const PORT = process.env.PORT || 8080;

//onServerStart function
const onServerStart = () => console.log(`Express http server listening on port: ${PORT}`);

//serving static files like css
app.use(express.static(__dirname + '/public'))

//using url encoded for app
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//all the routes are defined under routes/routes.js
app.use('/', require('./routes/routes'))

//Error 404, if user tries to go to any other routes
app.use((req,res) => {
    res.sendFile(path.join(__dirname,'/views/error.html'))
})

//start the server only if the data was populated to the global array 
initialize()
.then(() => app.listen(PORT, onServerStart))
.catch(e => console.log(e, 'server is offline'))