const mysql = require("mysql2");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Creative1408!",
    database: "employees"
});

connection.connect(err => {
    if (err) throw err;
    console.log("Connected.");
});