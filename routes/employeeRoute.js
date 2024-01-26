const express = require("express")
const router = express.Router()
const employeeControlor = require("../controlors.js/employeeControler")
const employee = require("../models/Employee")


router.post("/add-emp", employeeControlor.createEmployee)

module.exports = router

