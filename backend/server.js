const express = require("express");
const app = express();
const cors = require('cors');
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

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
    console.log(email);
    const errArray = [];
    const emailReg = new RegExp('^[a-zA-Z0-9_.-]+@[a-z0-9_.-]+\.[a-z]{2,3}$');
    const passwordReg = new RegExp('^[a-zA-Z0-9]{5,12}$');
    con.query(`SELECT COUNT(*) as count from users WHERE login='${login}'`, (err, result) => {
        const count = JSON.parse(JSON.stringify(result))[0].count;

        if (count > 0) {

            errArray.push('Ten login juz został uzyty');
        }
        if (!passwordReg.test(password)) {
            errArray.push('Hasło nie spelnia warunków')
        }

        if (!emailReg.test(email)) {
            errArray.push('E-mail nie spełnia warunków')
        }

        if (errArray.length > 0) {
            res.json(errArray.length);
        } else {
            bcrypt.hash(password, 10, (err, hash) => {
                con.query(`INSERT INTO users SET ?`, {
                    id: 'NULL',
                    login,
                    password: hash,
                    email
                }, (err, result, fields) => {
                    if (err) throw err;
                    res.json(result);
                });
            })

        }
    })



})


app.get("/login", (req, res, next) => {
    let { login, password } = req.query;
    console.log(login, password);
    con.query(`SELECT COUNT(*) as count FROM users WHERE login='${login}' `, (error, result) => {
        const count = JSON.parse(JSON.stringify(result))[0].count;

        if (count > 0) {
            con.query(`SELECT password,id FROM users WHERE login='${login}'`, (err, result) => {

                result = JSON.parse(JSON.stringify(result))[0];
                const passDb = result.password;
                const { id } = result;
                const hash = bcrypt.compareSync(password, passDb);
                if (hash) {
                    res.json(id)
                } else {
                    res.json('Złe dane');
                }
            })

        } else {
            res.json('Brak takiego uzytkownika');
        }

    })
})

app.post("/create", (req, res, next) => {

    let { questions, id, name } = req.body;
    let surveyID;
    let questionID;
    console.log(questions)
    con.query('INSERT INTO survey SET ?', {
        id_survey: 'NULL',
        id_user: id,
        name,
    }, (err, result) => {
        surveyID = result.insertId;
        questions.forEach(task => {
            const { multiply, options, query } = task;
            con.query('INSERT INTO questions SET ?', {
                id_question: 'NULL',
                id_survey: surveyID,
                question: query,
                multiply
            }, (err, result) => {
                questionID = result.insertId;
                options.forEach(item => {
                    const { content } = item;
                    con.query('INSERT INTO options SET ?', {
                        id_option: 'NULL',
                        id_question: surveyID,
                        option_text: content,
                    })
                })
            })
        });

    })

})

app.get('/mysuv', (req, res, next) => {
    const { id } = req.query;
    con.query(`SELECT survey.id_survey , survey.name , questions.question , questions.multiply FROM survey JOIN questions ON questions.id_survey=survey.id_survey WHERE survey.id_user='${id}'`, (err, result) => {
        console.log(result);
        res.json(result);
    });



})


app.listen(3500);

