const express = require('express');
const psychiatristController = require('../controllers/psychiatristController');

const router = express.Router();

router.post('/hospital-psychiatrists', psychiatristController.getPsychiatristsByHospital);

module.exports = router;
