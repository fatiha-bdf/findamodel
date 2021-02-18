var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');
const config = require('config') // the conjig.json i created inside config dir

// @access: Public
router.get('/', async (req, res) => {
		try {
			
		}
		catch(err) {
			console.log(err.message)
			return res.status(500).json({ msg: `Une erreur semble s'être produite, merci de réessayer`})

		}
	}
);

module.exports = router;
