const express = require('express')
const techController = require('../details/Technology')

const techRouter = express.Router()
techRouter.route("/tech")
.get(techController.apiController)
module.exports = techRouter