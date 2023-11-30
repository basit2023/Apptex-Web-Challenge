import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import Bootstrap Card and Button components

const ItemList = ({ items, addToCart }) => (
 
  <div className="item-list row">
    {items.map((item) => (
      <div key={item.id} className="col-md-4 mb-4">
        <Card>
          <Card.Img variant="top" src={item.img} alt={item.name} className="card-img-top" />
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>${item.price}</Card.Text>
            <Button variant="primary" onClick={() => addToCart(item)}>Add to Cart</Button>
          </Card.Body>
        </Card>
      </div>
    ))}
  </div>
);

export default ItemList;
