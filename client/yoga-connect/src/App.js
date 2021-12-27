import React from 'react'
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import TeacherSearch from "./pages/TeacherSearch";
import CreateTeacher from "./pages/ManageTeachers";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" component={TeacherSearch} />
          <Route exact path="/create" component={CreateTeacher} />
          <Route component={ErrorPage} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;