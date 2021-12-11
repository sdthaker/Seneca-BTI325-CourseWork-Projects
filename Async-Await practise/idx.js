const e = [
    {
        "employeeNum": 1,
        "firstName": "Foster",
        "lastName": "Thorburn",
        "email": "fthorburn0@myCompany.com",
        "SSN": "935-74-9919",
        "addressStreet": "8 Arapahoe Park",
        "addressCity": "New York",
        "addressState": "NY",
        "addressPostal": "20719",
        "maritalStatus": "single",
        "isManager": true,
        "employeeManagerNum": null,
        "status": "Full Time",
        "department": 2,
        "hireDate": "4/30/2014"
    },
    {
        "employeeNum": 31,
        "firstName": "Kennie",
        "lastName": "Casterton",
        "email": "kcasterton0@myCompany.com",
        "SSN": "966-16-5670",
        "addressStreet": "449 Upham Park",
        "addressCity": "New York",
        "addressState": "NY",
        "addressPostal": "28314",
        "maritalStatus": "married",
        "isManager": false,
        "employeeManagerNum": 17,
        "status": "Full Time",
        "department": 6,
        "hireDate": "7/18/2007"
    }
]

let em = e.filter(emp => {
    console.log(emp.isManager);
    return emp.isManager === true
})

console.log(em);