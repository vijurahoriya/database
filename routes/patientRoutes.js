const express = require('express');
const { check } = require('express-validator');
const multer = require('multer');
const patientController = require('../controllers/patientController');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/register', 
    upload.single('photo'), 
    [
        check('name').notEmpty().withMessage('Name is required'),
        check('address').isLength({ min: 10 }).withMessage('Address should be at least 10 characters'),
        check('email').isEmail().withMessage('Email should be valid'),
        check('phone').isLength({ min: 10 }).withMessage('Phone number should be at least 10 characters including country code'),
        check('password')
            .isLength({ min: 8, max: 15 })
            .matches(/[A-Z]/).withMessage('Must contain one upper character')
            .matches(/[a-z]/).withMessage('Must contain one lower character')
            .matches(/\d/).withMessage('Must contain a number')
    ],
    patientController.registerPatient
);

module.exports = router;
