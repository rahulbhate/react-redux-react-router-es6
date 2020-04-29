import React from "react";
import "../App.css";
import "../../style.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import AboutPage from "./about/AboutPage";
import ProductsPage from "./products/ProductsPage";
import CartPage from "./products/CartPage";
import UserLoginForm from "./users/UserLoginForm";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageUserPage from "./users/ManageUserPage";

function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={UserLoginForm} />
        <Route path='/user' component={ManageUserPage} />
        <Route path='/products' component={ProductsPage} />
        <Route path='/cart' component={CartPage} />
        <Route path='/courses' component={CoursesPage} />
        <Route path='/course/:slug' component={ManageCoursePage} />
        <Route path='/course' component={ManageCoursePage} />
        <Route path='/user' component={ManageUserPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Footer />
    </div>
  );
}

export default App;
