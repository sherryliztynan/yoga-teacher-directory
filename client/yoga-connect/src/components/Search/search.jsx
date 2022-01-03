import React from 'react'


export default ({ term, setter }) => (
  <input type="text" name="search" value={term} onChange={event => setter(event.target.value)} />
)
// import React, {useState, useEffect} from 'react'
// import axios from 'axios'
// import { Table}  from 'react-bootstrap'


// const Dropdown = () => {
//     const [teachers, setTeachers] = useState([]);
//     const [singleTeacher, setSingleTeacher] = useState([]);


//     useEffect(function() {
//         axios.get('http://localhost:3002/api/teachers')
//         .then((response) => setTeachers(response.data))
//         .then((error) => console.log(error))
//     }, [])

//     const handleChange = (e) => {
//         axios.get('http://localhost:3002/api/teachers/specialty/' + e.target.value)
//         .then((response) => setSingleTeacher(response.data))
//         .then((error) => console.log(error))
//     };

    

//     return (
//         <div>
//     <select onChange={handleChange}>
//         <option value = "0">--Select Specialty</option>
//         {teachers.map((teacher) => (
//         <option key={teacher.specialty} value={teacher.specialty}>
//             {teacher.specialty}
//         </option>
//         ))}
//     </select>
//     <br />
//     <br />
//     <Table striped bordered hover>
//             <thead>
//                 <tr>
//                     <td>Name</td>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                 <td>{singleTeacher}</td>
//                 </tr>
//             </tbody>
//     </Table>
//     </div>
//     )
// }

// export default Dropdown
