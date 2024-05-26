const Psychiatrist = require('../models/Psychiatrist');

exports.getPsychiatristsByHospital = (req, res) => {
    const hospitalId = req.body.hospitalId;

    Psychiatrist.getCountsAndHospitalName(hospitalId, (err, countsResult) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        const counts = countsResult[0];

        Psychiatrist.getAllByHospital(hospitalId, (err, psychiatristsResult) => {
            if (err) {
                return res.status(500).json({ error: err.message });
            }

            res.json({
                hospitalName: counts.hospital_name,
                totalPsychiatristCount: counts.psychiatrist_count,
                totalPatientsCount: counts.patient_count,
                psychiatristDetails: psychiatristsResult
            });
        });
    });
};


