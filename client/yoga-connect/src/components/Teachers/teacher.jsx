/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { NavLink } from "react-router-dom";
import "./teacher.css";

const Teacher = ({ id, name,}) => (
  <div className="teacher" key={id}>
    <NavLink to={`/teachers/${id}`}>{`${name}`}</NavLink>
  </div>
);

export default Teacher