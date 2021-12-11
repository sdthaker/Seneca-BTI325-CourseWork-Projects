const path = require('path')
const fs = require('fs')
const {getAllEmployees, getManagers, 
        getDepartments, addEmployee, 
        getEmployeeByNum, getEmployeesByStatus,
        getEmployeesByDepartment, getEmployeesByManager} 
    = require('../data-service')

const homeView = (req, res) => {
    res.sendFile(path.join(__dirname,'../views/home.html'))
}

const aboutView = (req, res) => {
    res.sendFile(path.join(__dirname,'../views/about.html'))
}

const employeesView = (req, res) => {

    if(req.query.status) {
        getEmployeesByStatus(req.query.status)
        .then(data => res.json(data))
        .catch(e => res.json({message: e}))
    }
    else if(req.query.department) {
        getEmployeesByDepartment(req.query.department)
        .then(data => res.json(data))
        .catch(e => res.json({message: e}))
    }
    else if(req.query.manager) {
        getEmployeesByManager(req.query.manager)
        .then(data => res.json(data))
        .catch(e => res.json({message: e}))
    }
    else {
        getAllEmployees()
        .then(data => res.json(data))
        .catch(e => res.json({message: e}))
    }
}

const managersView = (req, res) => {
    getManagers()
    .then(data => res.json(data))
    .catch(e => res.json({message: e}))
}

const departmentsView = (req, res) => {
    getDepartments()
    .then(data => res.json(data))
    .catch(e => res.json({message: e}))
}

const addEmployeesView = (req,res) => {
     res.sendFile(path.join(__dirname,'../views/addEmployee.html'))
}

const addImageView = (req,res) => {
     res.sendFile(path.join(__dirname,'../views/addImage.html'))
}

const redirectToImagesRoute = (req,res) => {
    res.redirect('/images')
}

const imagesView = (req,res) => {
    fs.readdir(__dirname + '/../public/images/uploaded', (err, files) => {
        if(err)
            return console.log('Unable to scan dir: ' + err)

        res.json({images: files})
    })
}

const addEmployees = (req,res) => {
    addEmployee(req.body)   //calls addEmployee in data-service.js
    .then(() => res.redirect('/employees'))
    .catch(e => res.json({message: e}))
}

const getEmployee = (req,res) => {
     getEmployeeByNum(req.params.empNum)
     .then(data => res.json(data))
     .catch(e => res.json({message: e}))
}

module.exports = {homeView, aboutView, employeesView, 
                managersView, departmentsView, addEmployeesView, 
                addImageView, imagesView, redirectToImagesRoute, 
                addEmployees, getEmployee}