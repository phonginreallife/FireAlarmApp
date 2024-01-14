const express = require("express")
const app = express()
const AlertRoutes = require("./alertRoutes")



app.use("/alert", AlertRoutes)

module.exports = app