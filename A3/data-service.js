let employees = [];
let departments = [];

//const fs = require('fs').promises;
const fs = require('fs');


function initialize() {

    return new Promise((resolve, reject) => {
        fs.readFile('./data/employees.json', 'utf-8', function (error, data) {
            if (error) 
                reject('File cannot be found,')
            else {
                if(!data) 
                    reject('No data found,')
                else {
                    employees = JSON.parse(data)
                    resolve()
                }
            }
        })

        fs.readFile('./data/departments.json', 'utf-8', function (error, data) {
            if (error) 
                reject('File cannot be found,')
            else {
                if(!data) 
                    reject('No data found,')
                else {
                    departments = JSON.parse(data)
                    resolve()
                }
            }
        })
    })   
    
    //using async/await
    // try{
    //     const emp = await fs.readFile('./data/employees.json', 'utf-8')
    //     employees = JSON.parse(emp)
    //     const dept = await fs.readFile('./data/departments.json', 'utf-8')
    //     departments = JSON.parse(dept)
    //     return Promise.resolve()
    // }
    // catch(e) {
    //     return Promise.reject('error cannot open file')
    // }
}


function getAllEmployees() {
    return new Promise((resolve, reject) => {
        if(employees == undefined || employees.length === 0)
            reject('no results returned') 
        else 
            resolve(employees)
    })
}

function getManagers() {
    return new Promise((resolve, reject) => {
        let manager = employees.filter(emp => emp.isManager === true)
        if(manager == undefined || manager.length === 0)
           reject('No results returned') 
        else
            resolve(manager)
    })
}

function getDepartments() {
    return new Promise((resolve, reject) => {
        if(departments == undefined || departments.length === 0)
           reject('No results returned') 
        else
            resolve(departments)
    })
}

function addEmployee(employeeData) {
    return new Promise((resolve, reject) => {
        if(!employeeData){
            reject('Employee Data was undefined')
        }
        else{
            if(employeeData.isManager == undefined)
                employeeData.isManager = false
            else 
                employeeData.isManager = true
    
            employeeData.empNum = employees.length + 1
            employeeData.employeeManagerNum = parseInt(employeeData.employeeManagerNum)
            employeeData.department = parseInt(employeeData.department)

            employees.push(employeeData)
            resolve()
        }
    }) 
}

function getEmployeeByNum(empNum) {
    return new Promise((resolve, reject) => {

        if(employees.length == 0){
            reject("No results returned")
        }
        else{
            let employee = employees.find(emp => emp.employeeNum == empNum)
            if (employee)
                resolve(employee)
            else
                reject("No results returned")
        }
    })
}

function getEmployeesByStatus(status){
    return new Promise((resolve, reject) => {

        if(employees.length == 0){
            reject("No results returned")
        }
        else {
            let emp = employees.filter(emp => emp.status == status)
            if (emp.length != 0)
                resolve(emp)
            else
                reject("No results returned")
        }
    })
}

function getEmployeesByDepartment(department){
    return new Promise((resolve, reject) => {

        if(employees.length == 0){
            reject("No results returned")
        }
        else{
            let emp = employees.filter(emp => emp.department == department)
            if (emp.length != 0)
                resolve(emp)
            else
                reject("No results returned")
        }
    })
}

function getEmployeesByManager(manager) {
    return new Promise((resolve, reject) => {

        if(employees.length == 0){
            reject("No results returned")
        }
        else{
            let emp = employees.filter(emp => emp.employeeManagerNum == manager)
            if (emp.length != 0)
                resolve(emp)
            else
                reject("No results returned")
        }
    })
}

module.exports = {initialize, getAllEmployees, getManagers, getDepartments, 
                addEmployee, getEmployeeByNum, getEmployeesByStatus,
                getEmployeesByDepartment, getEmployeesByManager}