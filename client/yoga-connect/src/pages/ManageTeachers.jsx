/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import AddTeacher from '../components/AddTeacher/AddTeacher'
import DisplayTeachers from '../components/DisplayTeachers/DisplayTeachers'

export default () => (
  <div className="ManageTeachers">
    <AddTeacher />
    <DisplayTeachers/>
  </div>
)