import React from 'react'
import axios from 'axios'

const addTeacherForm = () => {
    const [name, setName] = useState("");
    const [onlineAvailability, setOnlineAvailability] = useState(false);
    const [city, setCity] = useState("");
    const [instagram, setInstagram] = useState("");
    const [specialty, setSpecialty] = useState(0);

    const [newCity, setNewCity] = useState("");

    const [teacherList, setTeacherList] = useState([]);
}

const createTeacher = async (teacher) => {
    const { name, online_availability, city, instagram, specialty} = teacher

    if (!name || !online_availability || !city || !instagram || !specialty ) {
      alert("Please fill out all input fields.")
    } else {

      let res = axios.post('/create', teacher)
        .then(res => {
          return res
        })
        .catch(error => {
          return error
        })

      return res
    }
  }

return (
    <div className="TeacherInformation">
        <label>Name:</label>
        <input
        type="text"
        onChange={(event) => {
            setName(event.target.value)
        }}
        />
        <label>Online Availability:</label>
        <input
        type="boolean"
        onChange={(event) => {
            setOnlineAvailability(event.target.value)
        }}
        />
        <label>city:</label>
        <input
        type="text"
        onChange={(event) => {
            setCity(event.target.value)
        }}
        />
        <label>Instagram:</label>
        <input
        type="text"
        onChange={(event) => {
            setInstagram(event.target.value)
        }}
        />
        <label>Specialty:</label>
        <input
        type="text"
        onChange={(event) => {
            setSpecialty(event.target.value)
        }}
        />
          <button onClick={createTeacher}>Add Employee</button>
      </div>
     
                {/* <button
                  onClick={() => {
                    deleteEmployee(val.id);
                  }}
                >
                  Delete
                </button> */}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default addTeacherForm