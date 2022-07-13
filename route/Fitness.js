const express = require('express')
const fitController = require('../details/Fintess')

const fitRouter = express.Router()
fitRouter.route("/fit")
.get(fitController.apiController)
module.exports = fitRouter