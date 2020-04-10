import React from "react";
import "../App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import AboutPage from "./about/AboutPage";
import CoursesPage from "./courses/CoursesPage";
import AddCourse from "./courses/AddCourse";
import ManageCoursePage from "./courses/ManageCoursePage";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        <Route path='/addcourse' component={AddCourse} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/course/:slug' component={ManageCoursePage} />
        <Route path='/course' component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
