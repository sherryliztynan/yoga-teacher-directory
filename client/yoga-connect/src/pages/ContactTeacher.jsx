import React, { useEffect, useState } from "react";
import axios from "axios";
import "./contactyogateacherpage.css";
import TeacherInfo from "../../components/TeacherInfo/TeacherInfo";
import GoBack from "../../components/goback/goback";
import Title from "../../components/title/title"

const Teachers = (props) => {
  const [teacher, setTeacher] = useState([])

  const { teacherId } = props.match.params;
  

  useEffect(() => {
    const fetchTeachers = async () => {
      let fetch = await axios.get(`http://localhost:1331/api/YogaTeachers/${teacherId}`)

      setTeacher(fetch.data)
    }
    fetchTeachers()
  }, [])

  return (    
  <div className="info">
          <Title />
          <div className="profile">
          <li>First Name: {teacher.nameFirst}</li>
          <li>Last Name: {teacher.nameLast}</li>
          <li>Online Availability: {teacher.onlineAvailability}</li>
          <li>Specialty: {teacher.specialization}</li>
          <li>Contact Information: {teacher.contactInformation}</li>
          </div>
          <GoBack />
  </div>
        )
      }

export default Teachers