import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  loadCourses,
  deleteCourse,
  searchCourse
} from "../../redux/actions/courseActions";
import getVisibleCourses from "../../selectors/courses";
import { loadAuthors } from "../../redux/actions/authorActions";
import { addToCart, deleteCartItem } from "../../redux/actions/cartActions";
import { loadCategories } from "../../redux/actions/categoriesAction";
import PropTypes from "prop-types";
import ProductsList from "./ProductsList";
import CartList from "./CartList";
import Spinner from "../common/Spinner";
import Button from "../common/Button";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

const ProductsPage = ({
  loadCourses,
  loadAuthors,
  loadCategories,
  addToCart,
  deleteCartItem,
  courses,
  cart,
  authors,
  categories,
  deleteCourse,
  searchCourse,
  ...props
}) => {
  const [redirectToAddCoursePage, setRedirectToAddCoursePage] = useState(false);
  const [posts, setPosts] = useState([{}]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Use Effect Hook Called");
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert("Loading courses failed" + error);
      });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert("Loading authors failed" + error);
      });
    }
    if (categories.length === 0) {
      loadCategories().catch(error => {
        alert("Loading categories failed" + error);
      });
    }
  }, []);
  const handleSave = cart => {
    addToCart(cart);
  };
  return (
    <>
      {redirectToAddCoursePage && <Redirect to='/course' />}
      {props.loading ? (
        <Spinner />
      ) : (
        <>
          <Button
            title='Add Course'
            type='primary'
            onClick={() => {
              setRedirectToAddCoursePage({ redirectToAddCoursePage: true });
            }}
          />
          {console.log(cart)}
          <ProductsList courses={courses} onSave={handleSave} />
          <CartList cart={cart} />
        </>
      )}
    </>
  );
};

const mapStateToProps = state => {
  return {
    courses: getVisibleCourses(
      state.courses,
      state.authors,
      state.categories,
      state.filters
    ),
    authors: state.authors,
    cart: state.cart,
    categories: state.categories,
    loading: state.apiCallsInProgress > 0
  };
};
const mapDispatchToProps = {
  loadCourses,
  loadAuthors,
  loadCategories,
  addToCart,
  deleteCartItem,
  deleteCourse,
  searchCourse
};
ProductsPage.propTypes = {
  courses: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadCourses: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);
