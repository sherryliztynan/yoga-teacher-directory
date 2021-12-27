import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DisplayTeachers = () => {
  const [teacherList, setTeacherList] = useState([])

  useEffect(() => {
    const getTeachers = async () => {
      let get = await axios.get('/teachers')

      setTeacherList(get.data)
    }
    getTeachers()
  }, [])

return (
<div className="teachers">
<button onClick={DisplayTeachers}>Show Teachers</button>
{teacherList.map((teacher) => {
  return (
    <div className="teacher">
      <div>
        <h3>Name: {teacher.name}</h3>
        <h3>Online Availability: {teacher.online_availability}</h3>
        <h3>City: {teacher.city}</h3>
        <h3>Instagram: {teacher.instagram}</h3>
        <h3>Specialty: {teacher.specialty}</h3>
      </div>
</div>
)}

export default DisplayTeachers