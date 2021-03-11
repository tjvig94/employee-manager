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
    init();
});

const init = () => {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "Welcome! What would you like to do: ",
            choices: [
                "View all staff",
                "View staff by department",
                "View staff by manager"
            ]
        })
        .then(input => {
            switch(input.action) {
                case "View all staff":
                    viewAll();
                    break;
                case "View staff by department":
                    byDepartment();
                    break;
                case "View staff by manager":
                    byManager();
                    break;
                default:
                    console.log("Hmm something's not working...");
            };
        });
};