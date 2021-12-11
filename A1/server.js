/*********************************************************************************
* BTI325 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Soham Thaker Student ID: 011-748-159 Date: 2021-09-13
*
* Online (Heroku) URL: https://enigmatic-waters-48134.herokuapp.com/
*
********************************************************************************/ 

let express = require('express')
let path = require('path')
let errorHandler = require('./errorHandler/err')

let app = express()

app.use(express.static(__dirname + '/style/'))

let port = process.env.PORT || 3000;

function onHTTPStart() {
    console.log(`Server is listening on port: ${port}`)
}

app.get('/', (req, res) => {
    //throw ({name:"my own error handler", message:"threw purposely"});
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.use(errorHandler)

app.listen(port, onHTTPStart);