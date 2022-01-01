const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mysql = require('mysql2')
const cors = require('cors')
const { errorFunction, addNewTeacher, displayAllTeachers, updateTeacher, deleteTeacher, getTeacherByIdOrName } = require('./controllers/teachers')
app.use(cors());
app.use(express.json())

app.post('/api/teachers', bodyParser.json(), addNewTeacher)

app.get('/api/teachers', displayAllTeachers)

// app.get('/api/teachers/specialty/:identifier', getTeachersBySpecialty)

app.get('/api/teachers/:identifier', getTeacherByIdOrName)

app.put('/update', updateTeacher)

app.delete('api/teachers/:identifier', deleteTeacher)

app.get('*', errorFunction)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(3002, () => {
    console.log("Yay server is up on 3002")
})