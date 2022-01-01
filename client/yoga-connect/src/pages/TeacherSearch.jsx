import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Teacher from '../components/Teachers/teacher'
import Search from '../components/Search/search'
import Title from '../components/Title/title'
import ManageTeachersButton from '../components/ManageTeachersButton/manageteachersbutton'


const TeacherSearch = () => {

  const [teacherList, setTeacherList] = useState([])
  const [filteredTeacherList, setFilteredTeacherList] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const fetchTeachers = async () => {
    let {data} = await axios.get('http://localhost:3002/api/teachers')
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
 teacher.name.toLowerCase().includes(term.toLowerCase())
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
              name={teacher.name}
              specialty={teacher.specialty}
            />
              </div> 
       ))
            }
            <ManageTeachersButton />


       </div>
   )
 }

export default TeacherSearch

// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import Teacher from '../components/Teachers/teacher'
// import Dropdown from '../components/Search/search'
// import Title from '../components/Title/title'
// import ManageTeachersButton from '../components/ManageTeachersButton/manageteachersbutton'

// const TeacherSearch = () => {

//   const [teacherList, setTeacherList] = useState([])
//   const [filteredTeacherList, setFilteredTeacherList] = useState([])
//   const [searchTerm, setSearchTerm] = useState('')

//   const fetchTeachers = async () => {
//     let {data} = await axios.get('http://localhost:3002/api/teachers')
//     setTeacherList(data)
//     setFilteredTeacherList(data)
//   }  
//   useEffect(() => {
//     fetchTeachers()
//   }, []) 

// useEffect(() => {
// const filtered = filterTeachers(teacherList, searchTerm)

// setFilteredTeacherList(filtered)
// }, [searchTerm, teacherList])

// const filterTeachers= (list, term) => list.filter(teacher => (
//  teacher.specialty.toLowerCase().includes(term.toLowerCase())
// ))

//       return ( 
//           <div className="teachers">
//             <Title />     
//             <Dropdown Search term={searchTerm} setter={setSearchTerm} />
//             {
//             filteredTeacherList.map(teacher => (
//               <div className="teacher-list">
//             <Teacher
//               id={teacher.id}
//               name={teacher.name}
//             />
//             </div>
//    ))
//             }
//             <ManageTeachersButton />
//             </div>
//       )
//           }

// export default TeacherSearch