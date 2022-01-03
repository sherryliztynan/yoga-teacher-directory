/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../Styles/GoBack.scss'

const GoBack = () => (
  <NavLink to="/" className="NavLink">Go Back</NavLink>
)

export default GoBack