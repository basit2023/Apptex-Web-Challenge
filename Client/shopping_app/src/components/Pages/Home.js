import React from 'react';
import { Card, Button } from 'react-bootstrap'; // Import Bootstrap Card and Button components

const Home = ({ items, addToCart }) => (
 <div title={"All Products - Best offers "}>
    <img
    src="/images/banner.png"
    className="banner-img"
    alt="bannerimage"
    width={"100%"} // To make the image responsive
  />
 
  <div className="mb-10 item-list row">
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
  </div>
);

export default Home;
