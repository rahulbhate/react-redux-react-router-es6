import React from "react";
import "../App.css";
import "../../style.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import Footer from "./common/Footer";
import ProductsPage from "./products/ProductsPage";
import CartPage from "./products/CartPage";
import CoursesPage from "./courses/CoursesPage";
import AboutPage from "./about/AboutPage";
import ManageCoursePage from "./courses/ManageCoursePage";
import PageNotFound from "./PageNotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageUserPage from "./users/ManageUserPage";
import LoginPage from "./login/LoginPage";
import ContactPage from "./contact/ContactPage";
import requireAuth from "../../utils/requireAuth";
function App() {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={requireAuth(AboutPage)} />
        <Route path='/login' component={LoginPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route path='/user' component={ManageUserPage} />
        <Route path='/products' component={requireAuth(ProductsPage)} />
        <Route path='/cart' component={requireAuth(CartPage)} />
        <Route path='/courses' component={requireAuth(CoursesPage)} />
        <Route path='/course/:slug' component={requireAuth(ManageCoursePage)} />
        <Route path='/course' component={requireAuth(ManageCoursePage)} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
      <Footer />
    </div>
  );
}

export default App;
