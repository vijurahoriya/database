const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const Patient = require('../models/Patient');

exports.registerPatient = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, address, email, phone, password } = req.body;
    const photo = req.file ? req.file.path : null;

    const hashedPassword = bcrypt.hashSync(password, 8);

    Patient.create({ name, address, email, phone, password: hashedPassword, photo }, (err, result) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(201).json({ message: 'Patient registered successfully', patientId: result.insertId });
    });
};
