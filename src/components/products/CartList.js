import React from "react";
import PropTypes from "prop-types";

const CartList = ({ cart }) => {
  return (
    <>
      <h2>CartList</h2>
      {cart.map(c => (
        <Cart key={c.id} {...c} />
      ))}
    </>
  );
};

CartList.propTypes = {
  cart: PropTypes.array.isRequired
};

export default CartList;

const Cart = props => {
  const { id, title, category, authorName, picture, price, units = 1 } = props;
  return (
    <ul className='list pl0 mt0 measure center'>
      <li className='flex items-center lh-copy pa3 ph0-l bb b--black-10'>
        <img className='w2 h2 w3-ns h3-ns br-100' src={picture} />
        <div className='pl3 flex-auto'>
          <span className='f6 db black-70'>Category: {category}</span>
          <span className='f6 db black-70'>Title: {title}</span>
          <span className='f6 db black-70'>AuthorName: {authorName}</span>
        </div>
        <div>
          <a href='tel:' className='f6 link blue hover-dark-gray'>
            Price: {price}
          </a>
        </div>
      </li>
    </ul>
  );
};
