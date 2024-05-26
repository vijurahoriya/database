const connection = require('../config/db');

const Psychiatrist = {
    getAllByHospital: (hospitalId, callback) => {
        const query = `
            SELECT 
                p.id, 
                p.name, 
                COUNT(pt.id) as patients_count
            FROM 
                psychiatrists p
            LEFT JOIN 
                patients pt ON pt.psychiatrist_id = p.id
            WHERE 
                p.hospital_id = ?
            GROUP BY 
                p.id;
        `;
        connection.execute(query, [hospitalId], callback);
    },
    getCountsAndHospitalName: (hospitalId, callback) => {
        const query = `
            SELECT 
                (SELECT name FROM hospitals WHERE id = ?) as hospital_name,
                (SELECT COUNT(*) FROM psychiatrists WHERE hospital_id = ?) as psychiatrist_count,
                (SELECT COUNT(*) FROM patients WHERE hospital_id = ?) as patient_count
        `;
        connection.execute(query, [hospitalId, hospitalId, hospitalId], callback);
    }
};

module.exports = Psychiatrist;
