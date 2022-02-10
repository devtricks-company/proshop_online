import React, { useEffect } from "react";
import {
  Container,
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { addToCartAction,removeFromCartAction } from "../actions/cartActions";
import {FaTrashAlt} from 'react-icons/fa';

const CartScreen = () => {
  const { id } = useParams();

  const qty = Number(useLocation().search.split("=")[1]);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(() => {
    if (id) {
      dispatch(addToCartAction(id, qty));
    }
  }, [dispatch, id, qty]);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <h1 className="my-3">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message variant="info">
              Your Cart is empty <Link to="/">Go Back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={2}>
                      <Link to={`/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(addToCartAction(item.product, Number(e.target.value)))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                        <Button variant="light" as='button' onClick={ () => dispatch(removeFromCartAction(item.product))}>
                            <FaTrashAlt  color="#000"/>
                        </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4} className="py-3">
            <Card>
                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <h2>SubTotal (
                            {cartItems.reduce((acc,item) => acc + item.qty , 0)}
                            ) items </h2>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Row>
                            <Col>Total Price: </Col>
                            <Col>${cartItems.reduce((acc,item) => acc + item.qty * item.price ,0)}</Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className="text-center">
                        <Row>
                            <Col>
                            <Button  variant="dark" className="btn-block w-100">Procced to checkout</Button></Col>
                        </Row>
                       
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Col>
        
      </Row>
    </Container>
  );
};

export default CartScreen;
