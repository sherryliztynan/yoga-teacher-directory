import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import TeacherSearch from "./pages/TeacherSearch";
import ContactTeacher from "./pages/ContactTeacher";
import ManageTeachers from "./pages/ManageTeachers";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Switch>
          <Route path="/teachers/:Id" component={ContactTeacher} />
          <Route exact path="/" component={TeacherSearch} />
          <Route path="/create" component={ManageTeachers} />
          <Route path="*" component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;