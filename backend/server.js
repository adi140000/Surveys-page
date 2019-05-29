const express = require("express");
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'surveys'
});

app.use(cors());
app.set('trust proxy', 1);




app.get('/register', (req, res, next) => {
    let { login, password, email } = req.query;    
    con.query(`SELECT COUNT(*) as count from users WHERE login='${login}'`, (err, result) => {
        const count = JSON.parse(JSON.stringify(result))[0].count;
        if (count == 0) {
            bcrypt.hash(password, 10, (err, hash) => {        
                con.query(`INSERT INTO users SET ?`, { id: 'NULL', login, password:hash, email }, (err, result, fields) => {
                    if (err) throw err;            
                    res.json(result);
                });
            })
        } else {
            console.log(count)
            res.json(count)
        }
    })
   
    

})




app.get("/login", (req, res, next) => {
    let { login, password } = req.query; 
    console.log(login, password);
    con.query(`SELECT COUNT(*) as count FROM users WHERE login='${login}' `,(error, result)=> {
        const count = JSON.parse(JSON.stringify(result))[0].count;        
        
        if (count > 0) {
            con.query(`SELECT password FROM users WHERE login='${login}'`, (err, result) => {
                result = JSON.parse(JSON.stringify(result))[0].password;
                const hash = bcrypt.compareSync(password, result);
                console.log(hash);
                res.json(hash)
                
            })
            
        } else {
            res.json(false)
        }
        

    })
   
   
    

})




app.listen(3500);

