const express = require("express")
const router = express.Router()
const employeeControlor = require("../controlors.js/employeeControler")
const employee = require("../models/employeeScheema")


router.post("/add-emp", employeeControlor.createEmployee)

module.exports = router

