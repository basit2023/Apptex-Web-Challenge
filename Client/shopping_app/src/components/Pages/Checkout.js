import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Checkout = ({ cart, clearCart }) => (
  <div className="checkout">
    <h2>Checkout</h2>
    <div className="row">
      {cart.map((item) => (
        <div key={item.id} className="col-md-4 mb-4">
          <Card>
            <Card.Img variant="top" src={item.img} alt={item.name} className="card-img-top" />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>${item.price}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
    {cart.length > 0 && (
      <button onClick={clearCart} className="btn btn-danger mt-3">
        Clear Cart
      </button>
    )}
  </div>
);

export default Checkout;
