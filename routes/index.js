const express = require('express');
const Router = express.Router();

//init middleware
Router.use(express.json({ extended : false }))

Router.get('/', (req, res) => {
	res.send('welcome')
})

module.exports = Router
