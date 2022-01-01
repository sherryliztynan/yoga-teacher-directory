/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import ManageTeachersForm from '../components/ManageTeachersForm/ManageTeacherForm'
import GoBack from '../components/GoBack/GoBack'


export default () => (
  <div className="ManageTeachers">
    <ManageTeachersForm />
    <GoBack />
  </div>
)