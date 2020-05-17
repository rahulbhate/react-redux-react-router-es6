import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import {
  loadCart,
  deleteCartItem,
  deleteAllCartItems,
  checkout
} from "../../redux/actions/cartActions";

const CartPage = ({
  cart,
  loadCart,
  deleteCartItem,
  deleteAllCartItems,
  checkout
}) => {
  useEffect(() => {
    if (cart.length === 0) {
      loadCart();
    }
  }, []);
  const [product] = useState({
    name: "Tesla Roadster",
    price: 64998.67,
    description: "Cool car"
  });
  const handleSave = id => {
    deleteCartItem(id);
  };
  const handleDeleteAll = () => {
    deleteAllCartItems();
  };
  function handleToken(token) {
    const newItem = { ...token, product: product, cart: cart };
    checkout(newItem);
    //console.log({ token, addresses });
  }
  return (
    <main>
      <div dataName='component'>
        <h2>Cart List</h2>
        <button className='btn btn-outline-danger' onClick={handleDeleteAll}>
          Remove All
        </button>

        {cart.map(c => (
          <Cart key={c.id} {...c} onsave={handleSave} />
        ))}

        <div>Cart Total:{cart.reduce((a, c) => a + c.price * c.units, 0)} </div>
        <StripeCheckout
          stripeKey='pk_test_csT7zJCCCXmozAPwq3TP9iKF00I2uUJyhP'
          token={handleToken}
          billingAddress
          shippingAddress
          currency='AUD'
          name='Buy Online Course'
          amount={cart.reduce((a, c) => a + c.price * c.units, 0) * 100}
        >
          <button className='btn btn-info'>Checkout </button>
        </StripeCheckout>
      </div>
    </main>
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
  deleteAllCartItems,
  checkout
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
    total,
    units = 0,
    onsave
  } = props;
  return (
    <>
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
    </>
  );
};
