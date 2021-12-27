import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Teacher from '../../components/Teachers/teacher'
import Search from '../../components/search/search'
import Title from '../../components/title/title'
import './yogateacherspage.css'

const TeacherSearch = () => {

  const [teacherList, setTeacherList] = useState([])
  const [filteredTeacherList, setFilteredTeacherList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchTeachers = async () => {
    let {data} = await axios.get('http://localhost:1331/api/YogaTeachers')
    setTeacherList(data)
    setFilteredTeacherList(data)
  }  
  useEffect(() => {
    fetchTeachers()
  }, []) 

useEffect(() => {
const filtered = filterTeachers(teacherList, searchTerm)

setFilteredTeacherList(filtered)
}, [searchTerm, teacherList])

const filterTeachers= (list, term) => list.filter(teacher => (
 teacher.nameFirst.toLowerCase().includes(term.toLowerCase())
))

      return ( 
          <div className="teachers">
            <Title />       
            <Search Search term={searchTerm} setter={setSearchTerm} />
            {
            filteredTeacherList.map(teacher => (
              <div className="teacher-list">
            <Teacher
              id={teacher.id}
              nameFirst={teacher.nameFirst}
              nameLast={teacher.nameLast}
            />
              </div> 
       ))
            }
       </div>
   )
 }

export default TeacherSearch