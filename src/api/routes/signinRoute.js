const express = require('express');
const { signin } = require('../controllers/signinController');

const router = express.Router();

router.put('/', signin);

module.exports = router;
