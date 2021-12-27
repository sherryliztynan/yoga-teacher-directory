import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';

import TeacherSearch from "./pages/TeacherSearch";
import CreateTeacher from "./pages/ManageTeachers";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={TeacherSearch} />
          <Route exact path="/create" component={CreateTeacher} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;