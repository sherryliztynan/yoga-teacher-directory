/* eslint-disable no-console */
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const {
  errorFunction, addNewTeacher, displayAllTeachers, updateTeacher, deleteTeacher, getTeacherByIdOrName
} = require('./controllers/teachers')
const path = require('path')

app.use(cors())
app.use(express.json())

app.post('/api/teachers', bodyParser.json(), addNewTeacher)

app.get('/api/teachers', displayAllTeachers)

app.get('/api/teachers/:identifier', getTeacherByIdOrName)

app.put('/api/teachers/:identifier', updateTeacher)

app.delete('/api/teachers/:identifier', deleteTeacher)

app.get('*', errorFunction)

app.all('*', (request, response) => response.sendFile(path.resolve(__dirname, 'client/build', 'index.html')))

app.listen(3002, () => {
  console.log('Yay server is up on 3002')
})
