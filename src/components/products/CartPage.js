import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  loadCart,
  deleteCartItem,
  deleteAllCartItems
} from "../../redux/actions/cartActions";

const CartPage = ({ cart, loadCart, deleteCartItem, deleteAllCartItems }) => {
  useEffect(() => {
    if (cart.length === 0) {
      loadCart();
    }
  }, []);
  const handleSave = id => {
    deleteCartItem(id);
  };
  const handleDeleteAll = () => {
    deleteAllCartItems();
  };
  return (
    <>
      <h2>Cart List</h2>
      <button className='btn btn-outline-danger' onClick={handleDeleteAll}>
        Remove All
      </button>
      {cart.map(c => (
        <Cart key={c.id} {...c} onsave={handleSave} />
      ))}
    </>
  );
};
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
const mapDispatchToProps = {
  loadCart,
  deleteCartItem,
  deleteAllCartItems
};
CartPage.propTypes = {
  cart: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);

const Cart = props => {
  const {
    id,
    title,
    category,
    authorName,
    picture,
    price,
    units = 1,
    onsave,
    deleteCartItem
  } = props;
  return (
    <ul className='list pl0 mt0 measure center'>
      <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
        <img className='w2 h2 w3-ns h3-ns br-100' src={picture} />
        <div className='pl3 flex-auto'>
          <span className='f6 db black-70'>Category: {category}</span>
          <span className='f6 db black-70'>Title: {title}</span>
          <span className='f6 db black-70'>AuthorName: {authorName}</span>
        </div>
        <div className='pl6 flex-auto'>
          <button
            className='btn btn-outline-danger'
            onClick={() => {
              onsave({ id });
            }}
          >
            Remove Item
          </button>
          <a href='tel:' className='f6 link blue hover-dark-gray'>
            Price: {price}
          </a>
        </div>
      </li>
    </ul>
  );
};
