/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import ManageTeachersForm from '../components/ManageTeachersForm/ManageTeacherForm'
import GoBack from '../components/GoBack/GoBack'
import Title from '../components/Title/title'
import '../Styles/ManageTeachersForm.scss'


export default () => (
  <div className="ManageTeachers">
    <Title />
    <h2 className="h2">Add a New Teacher Below</h2>
    <ManageTeachersForm />
    <GoBack />
  </div>
)