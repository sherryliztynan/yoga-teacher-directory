const models = require('../models')

const errorFunction = (req, res) => {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND')
}

const displayAllTeachers = async (req, res) => {
  const teachers = await models.Teachers.findAll()

  return res.send(teachers)
}

const addNewTeacher = async (req, res) => {
    const newTeacher = models.Teachers
  
    try {
      const {
        name, online_availability, city, instagram, specialty
      } = req.body
  
      if (!name || !online_availability || !city || !instagram || !specialty ) {
        return res.send('Addition failed. All fields are required')
      }
  
      await newTeacher.create({
        name, online_availability, city, instagram, specialty
      })
  
      return res.status(201).redirect('/')
    } catch (error) {
      return res.status(500).send('HTTP Error 500 unable to handle this request')
    }
  }


  const updateTeacherCity = async (req, res) => {
    try {
      const {
        name, online_availability, city, instagram, specialty
      } = req.body
      const { id } = req.params
  
      if (!name || !online_availability || !city || !instagram || !specialty ) {
        return res.status(401).send('Please include all fields: id, name, age, address, gpa, major, image')
      }
  
      const teacher = await models.Teachers.findOne({ where: { id } })
  
      if (!teacher) return res.send(`Unable to update student #${id}, they do not exist in the database`)
  
      const updatedTeacher = await teacher.update({
        name, online_availability, city, instagram, specialty
      }, { returning: true })
  
      return res.status(201).redirect('/')
    } catch (error) {
      res.status(500).send('HTTP Error 500 unable to handle this request')
    }
  }
  

const deleteTeacher = async (req, res) => {
  try {
    const id = req.params.id

    const teacher = await models.Teachers.findOne({ where: { id } })

    if (!teacher) return res.send(`Unable to delete teacher #${id}, they do not exist in the database`)

    await teacher.destroy()

    return res.status(200).redirect('/')
  } catch (error) {
    res.status(500).send('HTTP Error 500 unable to handle this request')
  }
}

module.exports = {
  errorFunction,
  displayAllTeachers,
  addNewTeacher,
  updateTeacherCity,
  deleteTeacher
}