const express = require('express');
const mysql = require('mysql'); 

const app = express();

//Databse creation


//Create connection to sql

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password: 'foxy',

});

//Connect
db.connect((err) => {
    if (err){
        throw err;
    }
    console.log("Connection was succesfull");
});


app.use(express.static('./'));

app.get('/createdb', (req, res) =>{
    let sql = 'CREATE DATABASE valorant';
    db.query(sql, (err, result) =>{
        if (err){
            throw err;
            console.log(result);
            console.log("Database created")
        }
    })
    console.log("Database is ready");

    let tbl = 'CREATE TABLE matchdata(id int AUTO_INCREMENT, username VARCHAR(16), kills int, deaths int, assists int, result VARCHAR(4), agent VARCHAR(10),  map VARCHAR(10), PRIMARY KEY(id))';
    db.query(tbl, (err, result) => {
        if (err) {
            throw err;
            console.log(result);
            console.log("Tables created")
        }
    });
});

//Add data to the table
app.get('/addData', (req, res) => {
    let data = {}
});






app.listen('3000', () => {
    console.log('Server started on port 3000');
});

