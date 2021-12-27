const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')
const { errorFunction, addNewTeacher, displayAllTeachers, updateTeacherCity, deleteTeacher } = require('../controllers/teachers')
app.use(cors());
app.use(express.json())

app.post('/create', bodyParser.json(), addNewTeacher)

app.get('/teachers', displayAllTeachers)

app.put('/update', updateTeacherCity)

app.delete('/teachers/:id', deleteTeacher)

app.get('*', errorFunction)

app.listen(3002, () => {
    console.log("Yay server is up on 3002")
})