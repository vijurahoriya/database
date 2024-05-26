const connection = require('../config/db');

const Patient = {
    create: (data, callback) => {
        const query = 'INSERT INTO patients (name, address, email, phone, password, photo) VALUES (?, ?, ?, ?, ?, ?)';
        connection.execute(query, [data.name, data.address, data.email, data.phone, data.password, data.photo], callback);
    }
};

module.exports = Patient;
