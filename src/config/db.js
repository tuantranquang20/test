const mysql = require("mysql2");

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "",
    password: "",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
pool.connect(function (err) {
    if (err) throw err;
    console.log("Connected!!!");
});
