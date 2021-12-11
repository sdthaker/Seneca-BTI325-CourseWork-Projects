const express = require('express')
const multer = require('multer')
const path = require('path')
const   {homeView, aboutView, employeesView, managersView, 
        departmentsView, addEmployeesView, addImageView, 
        imagesView, redirectToImagesRoute, addEmployees,
        getEmployee, updateEmployeeController} 
        = require('../controllers/routeControllers')

const router = express.Router()

const storage = multer.diskStorage({
  destination: "./public/images/uploaded",
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})
const upload = multer({ storage: storage })

router.get('/', homeView)

router.get('/about', aboutView)

router.get('/employees', employeesView)
router.get('/employee/:empNum', getEmployee)

//router.get('/managers', managersView)

router.get('/departments', departmentsView)

router.get('/employees/add', addEmployeesView)
router.post('/employees/add', addEmployees)
router.post('/employee/update', updateEmployeeController);

router.get('/images/add', addImageView)
router.post('/images/add', upload.single("imageFile"), redirectToImagesRoute)
router.get('/images', imagesView)

module.exports = router