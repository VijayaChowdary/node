const Employee = require("../models/Employee")
const employeeScheema = require("../models/Employee")

const createEmployee = async(req, res) => {
    try{
        const {name, email, phone, city} = req.body

        const employee = new Employee({
            name,
            email,
            city,
            phone
        })
        await employee.save()
        res.status(201).json(employee)
    }catch(error){
        console.log("error", error)
        res.status(500).json({message: "server error "})
    }
}

module.exports = {createEmployee}

// 200 all are succes // 300 redirection // 400 errro req erro // 500 server error 