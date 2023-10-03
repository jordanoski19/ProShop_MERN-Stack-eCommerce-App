import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";
import products from "../products";

const HomeScreen = () => {
  return (
    <h1>
      <Row>
        {products.map((item) => (
          <Col key={item._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={item}></Product>
          </Col>
        ))}
      </Row>
    </h1>
  );
};

export default HomeScreen;
