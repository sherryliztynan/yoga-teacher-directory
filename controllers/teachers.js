const models = require('../models')

const errorFunction = (req, res) => {
  res.status(404).send('ERROR CODE 404 PAGE NOT FOUND')
}

const displayAllTeachers = async (req, res) => {
  const teachers = await models.Teachers.findAll()

  return res.send(teachers)
}

const getTeacherByIdOrName = async (request, response) => {
  const { identifier } = request.params

  const Teacher = await models.Teachers.findOne({
    where: {
      [models.Sequelize.Op.or]: [
        { id: identifier },
        { name: { [models.Sequelize.Op.like]: `%${identifier}%` } },
      ]
    },
    // include: [{ model: models.YogaTeachers }]
  })

  return Teacher
    ? response.send(Teacher)
    : response.sendStatus(404)
}

// const getTeachersBySpecialty = async (request, response) => {
//   const { identifier } = request.params

//   const specialization = await models.Teachers.findAll({
//     attributes: ['specialty', 'name'],
//     where: {
//       [models.Sequelize.Op.or]: [
//         { specialty: identifier },
//       ]
//     },
//   })

//   return specialization
//     ? response.send(specialization)
//     : response.sendStatus(404)
// }

const addNewTeacher = async (req, res) => {
    try {
      const {
        name, city, instagram, specialty
      } = req.body
  
      if (!name || !city || !instagram || !specialty ) {
        return res.send('Addition failed. All fields are required')
      }
  
      const newTeacher = await models.Teachers.create({
        name,  city, instagram, specialty
      })
  
      return response.status(201).send(newTeacher)
    } catch (error) {
      return res.status(500).send('HTTP Error 500 unable to handle this request')
    }
  }


  const updateTeacher= async (req, res) => {
    try {
      const {
        name, city, instagram, specialty
      } = req.body
      const { id } = req.params
  
      if (!name || !city || !instagram || !specialty ) {
        return res.status(401).send('Please include all fields: id, name, age, address, gpa, major, image')
      }
  
      const teacher = await models.Teachers.findOne({ where: { id } })
  
      if (!teacher) return res.send(`Unable to update teacher #${id}, they do not exist in the database`)
  
      const updatedTeacher = await teacher.update({
        name, city, instagram, specialty
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
  updateTeacher,
  deleteTeacher,
  // getTeachersBySpecialty
  getTeacherByIdOrName
}