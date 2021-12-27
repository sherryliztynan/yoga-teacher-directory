import React from 'react'
import axios from 'axios'

const AddTeacher = () => {
    const [name, setName] = useState("");
    const [onlineAvailability, setOnlineAvailability] = useState(false);
    const [city, setCity] = useState("");
    const [instagram, setInstagram] = useState("");
    const [specialty, setSpecialty] = useState(0);
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
        <button>Add Teacher</button>
    </div>
)
export default AddTeacher