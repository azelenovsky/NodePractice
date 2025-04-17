const mysql = require('mysql2');

const pool = mysql.createPoolCluster({
    host: "localhost",
    user: "root",
    database: "node-complete",
    password: "nodecomplete"
});

module.exports = pool.promise();