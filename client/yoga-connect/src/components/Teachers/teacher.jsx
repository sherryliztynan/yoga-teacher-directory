/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { NavLink } from "react-router-dom";
import '../../Styles/TeacherSearchPage.scss'

const Teacher = ({ id, name,}) => (
  <div className="teacher" key={id}>
    <NavLink to={`/teachers/${id}`} className="link">{`${name}`}</NavLink>
  </div>
);

export default Teacher