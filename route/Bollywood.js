const express = require('express')
const bollyController = require('../details/Bollywood')

const bollyRouter = express.Router()
bollyRouter.route("/bolly")
.get(bollyController.apiController)
module.exports = bollyRouter