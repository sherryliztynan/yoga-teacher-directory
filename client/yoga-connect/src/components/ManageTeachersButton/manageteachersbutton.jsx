import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../Styles/ManageTeachersButton.scss'

const ManageTeachersButton = () => (
<NavLink to="/create" className="wrapper">Manage Teachers</NavLink>

)

export default ManageTeachersButton