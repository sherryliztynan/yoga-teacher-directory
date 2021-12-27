const models = require('../models')

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

const displayAllTeachers = async (req, res) => {
    const teachers = await models.Teachers.findAll()
  
    return res.send(teachers)
  }

const updateTeacherCity = async (req, res) => {
  const updateCity = await models.Teachers.update(
    { title: 'a very different title now' },
    { where: { _id: 1 } }
  )
  handleResult(result)
} catch (err) {
  handleError(err)
}
}