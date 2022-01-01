// import React, { useRef } from 'react'
// import axios from 'axios'

// const AddTeacherForm = () => {
//   const formData = useRef(null)

//   const handleSubmit = async (event) => {
//     event.preventDefault()

//     const { current } = formData

//     const teacher = {
//       name: current.name.value,
//       city: current.city.value,
//       instagram: current.instagram.value,
//       specialty: current.specialty.value,
//     }

//     let newTeacher = await createTeacher(teacher)
//     console.log(newTeacher)
//     window.location.href = '/create'
//   }

//   const createTeacher = async (teacher) => {
//     const { name, city, instagram, specialty } = teacher

//     if (!name || !city || !instagram || !specialty ) {
//       alert("Please fill out all input fields.")
//     } else {

//       let res = axios.post('http:localhost:3002/api/teachers', teacher)
//         .then(res => {
//           return res
//         })
//         .catch(error => {
//           return error
//         })

//       return res
//     }
//   }

//   return (
//     <form ref={formData} className="addForm">
//       <div className="input-container">
//         <label>Name:</label>
//         <input type="text" id="add-name" name="name" />
//         <label>City:</label>
//         <input type="text" id="add-city" name="city" />
//         <label>Instagram:</label>
//         <input type="text" id="add-instagram" name="instagram" />
//         <label>Specialty:</label>
//         <input type="text" id="add-major" name="major" />
//       </div>
//       <div className="submit-container">
//         <button className="submit" type="submit" onClick={handleSubmit}>Add Teacher</button>
//       </div>
//     </form>
//   )
// }

// export default AddTeacherForm

import { useState } from 'react';
import Axios from 'axios';

const TeacherForm = ()  => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [instagram, setInstagram] = useState('');
  const [specialty, setSpecialty] = useState('');

  const [newCity, setNewCity] = useState("");

  const [teacherList, setTeacherList] = useState([]);

  const addTeacher = () => {
    Axios.post("http://localhost:3002/api/teachers", {
      name: name,
      city: city,
      instagram: instagram,
      specialty: specialty,
    }).then(() => {
      setTeacherList([
        ...teacherList,
        {
          name: name,
          city: city,
          instagram: instagram,
          specialty: specialty,
        },
      ]);
    });
  };

  const getTeachers = () => {
    Axios.get("http://localhost:3002/api/teachers").then((response) => {
      setTeacherList(response.data);
    });
  };

  const updateTeacherCity = (id) => {
    Axios.put("http://localhost:3002/api/teachers/:identifier", { city: newCity, id: id }).then(
      (response) => {
        setTeacherList(
          teacherList.map((teacher) => {
            return teacher.id === id
              ? {
                  id: teacher.id,
                  name: teacher.name,
                  city: newCity,
                  instagram: teacher.instagram,
                  specialty: teacher.specialty,
                }
              : teacher;
          })
        );
      }
    );
  };

  const deleteTeacher = (id) => {
    Axios.delete(`http://localhost:3002/api/teachers/:identifier`).then((response) => {
      setTeacherList(
      teacherList.filter((teacher) => {
          return teacher.id !== id;
        })
      );
    });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>City:</label>
        <input
          type="text"
          onChange={(event) => {
            setCity(event.target.value);
          }}
        />
        <label>Instagram:</label>
        <input
          type="text"
          onChange={(event) => {
            setInstagram(event.target.value);
          }}
        />
        <label>Specialty:</label>
        <input
          type="text"
          onChange={(event) => {
            setSpecialty(event.target.value);
          }}
        />
        <button onClick={addTeacher}>Add Teacher</button>
      </div>
      <div className="teachers">
        <button onClick={getTeachers}>Show Teachers</button>
        {teacherList.map((teacher, key) => {
          return (
            <div className="teacher">
              <div>
                <h3>Name: {teacher.name}</h3>
                <h3>City: {teacher.city}</h3>
                <h3>Instagram: {teacher.instagram}</h3>
                <h3>Specialty: {teacher.specialty}</h3>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="New York City"
                  onChange={(event) => {
                    setNewCity(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateTeacherCity(teacher.id);
                  }}
                >
                  {" "}
                  Update City
                </button>

                <button
                  onClick={() => {
                    deleteTeacher(teacher.id);
                  }}
                >
                  Delete Teacher
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TeacherForm