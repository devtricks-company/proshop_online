import React, { useEffect } from "react";
import { Button, Card, Container, ListGroupItem } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Row, Col, Image, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import Rating from "../components/Rating";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { productDetailsAction } from "../actions/productActions";

const ProudctScreen = () => {
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const { id } = useParams();

  useEffect(() => {
        dispatch(productDetailsAction(id))
  }, []);
  return (
    <main className="my-3">
      <Container>
        <Link to="/" className="btn btn-light">
          Go back
        </Link>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            <Col md={6}>
              <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={3}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>{product.name}</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    numReview={product.numReviews}
                  />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
                <ListGroup.Item>{product.description}</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col>Price: </Col>
                      <Col>${product.price}</Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col>Status: </Col>
                      <Col>
                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item className="text-center">
                    <Button
                      className="btn btn-block btn-dark"
                      disabled={product.countInStock === 0}
                    >
                      Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </main>
  );
};

export default ProudctScreen;
