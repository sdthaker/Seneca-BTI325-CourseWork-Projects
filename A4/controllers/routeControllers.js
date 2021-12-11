const path = require('path')
const fs = require('fs')
const {getAllEmployees, getManagers, 
        getDepartments, addEmployee, 
        getEmployeeByNum, getEmployeesByStatus,
        getEmployeesByDepartment, getEmployeesByManager,
        updateEmployee} = require('../data-service')

const homeView = (req, res) => {
    //res.sendFile(path.join(__dirname,'../views/home.html'))
    res.render('home', {})
}

const aboutView = (req, res) => {
    //res.sendFile(path.join(__dirname,'../views/about.html'))
    res.render('about', {})
}

const employeesView = (req, res) => {

    if(req.query.status) {
        getEmployeesByStatus(req.query.status)
        .then(employees => res.render("employees", {employees}))
        .catch(errorMessage => res.render("employees", {message: "no results"}))
    }
    else if(req.query.department) {
        getEmployeesByDepartment(req.query.department)
        .then(employees => res.render("employees", {employees}))
        .catch(errorMessage => res.render("employees", {message: "no results"}))
    }
    else if(req.query.manager) {
        getEmployeesByManager(req.query.manager)
        .then(employees => res.render("employees", {employees}))
        .catch(errorMessage => res.render("employees", {message: "no results"}))
    }
    else {
        getAllEmployees()
        .then(employees => res.render("employees", {employees}))
        .catch(errorMessage => res.render("employees", {message: "no results"}))
    }
}

const managersView = (req, res) => {
    getManagers()
    .then(data => res.json(data))
    .catch(e => res.json({message: e}))
}

const departmentsView = (req, res) => {
    getDepartments()
    .then(departments => res.render("departments", {departments}))
    .catch(errorMessage => res.render("departments", {message: "no results"}))
}

const addEmployeesView = (req,res) => {
    res.render('addEmployee', {});
}

const addImageView = (req,res) => {
    res.render('addImage', {});
}

const redirectToImagesRoute = (req,res) => {
    res.redirect('/images')
}

const imagesView = (req,res) => {
    fs.readdir(__dirname + '/../public/images/uploaded', (err, items) => {
        if(err)
            return console.log('Unable to scan dir: ' + err)

        res.render('images',{items})
    })
}

const addEmployees = (req,res) => {
    addEmployee(req.body)   //calls addEmployee in data-service.js
    .then(() => res.redirect('/employees'))
    .catch(e => res.json({message: e}))
}

const getEmployee = (req,res) => {
     getEmployeeByNum(req.params.empNum)
     .then(employee =>  res.render("employee", { employee }))
     .catch(e => res.render("employees", {message:"no results"}))
}

const updateEmployeeController = (req, res) => {
    updateEmployee(req.body)
    .then(res.redirect("/employees"))
    .catch(e => res.render("employees",{message:"no results"}))
}

module.exports = {homeView, aboutView, employeesView, 
                managersView, departmentsView, addEmployeesView, 
                addImageView, imagesView, redirectToImagesRoute, 
                addEmployees, getEmployee, updateEmployeeController}