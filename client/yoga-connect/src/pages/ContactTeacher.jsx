/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import GoBack from "../components/GoBack/GoBack";
import Title from "../components/Title/title";
import '../Styles/ContactTeacher.scss'


const Teachers = (props) => {
  const [teacher, setTeacher] = useState([])

  const { Id } = props.match.params;
  

  useEffect(() => {
    const fetchTeachers = async () => {
      let fetch = await axios.get(`http://localhost:3002/api/teachers/${Id}`)

      setTeacher(fetch.data)
    }
    fetchTeachers()
  }, [])

  return (    
  <div className="info">
          <Title />
          <div className="profile">
          <li>Name: {teacher.name}</li>
          <li>City: {teacher.city}</li>
          <li>Instagram: {teacher.instagram}</li>
          <li>Specialty: {teacher.specialty}</li>
          </div>
          <GoBack />
  </div>
        )
      }

export default Teachers