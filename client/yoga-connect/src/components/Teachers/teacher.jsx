/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { NavLink } from "react-router-dom";
import "./teacher.css";

const Teacher = ({ id, nameFirst, nameLast }) => (
  <div className="teacher" key={id}>
    <NavLink to={`/YogaTeachers/${id}`}>{`${nameFirst} ${nameLast}`}</NavLink>
  </div>
);

export default Teacher