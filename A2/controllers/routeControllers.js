const path = require('path')
const {getAllEmployees, getManagers, getDepartments} = require('../data-service')

const homeView = (req, res) => {
    res.sendFile(path.join(__dirname,'../views/home.html'))
}

const aboutView = (req, res) => {
    res.sendFile(path.join(__dirname,'../views/about.html'))
}

const employeesView = (req, res) => {
    getAllEmployees()
    .then(data => res.json(data))
    .catch(e => res.json({message: e}))
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

module.exports = {homeView, aboutView, employeesView, managersView, departmentsView}