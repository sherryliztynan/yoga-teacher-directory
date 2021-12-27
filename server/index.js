const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const {addNewTeacher, displayAllTeachers, updateTeacherCity} = require('../controllers/teachers')
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "yoga_directory",
})

app.post('/create', bodyParser.json(), addNewTeacher)

app.get('/teachers', displayAllTeachers)

app.put('/update', updateTeacherCity)


app.listen(3002, () => {
    console.log("Yay server is up on 3002")
})