// src/components/CartItem.js
import React from 'react';

const Cart = ({ cartLength }) => (
  <div className="cart" onClick={() => window.location.href = "/checkout"}>
    Cart ({cartLength})
  </div>
);

export default Cart;
