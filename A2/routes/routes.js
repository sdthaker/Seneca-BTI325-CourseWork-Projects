const express = require('express')
const {homeView, aboutView, employeesView, managersView, departmentsView} = require('../controllers/routeControllers')

const router = express.Router()

router.get('/', homeView)

router.get('/about', aboutView)

router.get('/employees', employeesView)

router.get('/managers', managersView)

router.get('/departments', departmentsView)

module.exports = router