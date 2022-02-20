import React, { useState, useEffect } from "react";
import { Link,useSearchParams,useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { userLoginAction } from "../actions/userAciton";
import FormContainer from "../components/FormContainer";

const LoginScreen = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const {loading,error,userInfo} = useSelector(state => state.userLogin);  
  const redirect = searchParams.get('redirect') ? `/${searchParams.get('redirect')}` : '/';
  
  useEffect(() => {
        if(userInfo){
            navigate(redirect);
        }
  },[redirect,userInfo,navigate])
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(userLoginAction(email,password))
  };
  return (
    <FormContainer>
      <h1>Sing In</h1>
      {error && <Message variant='danger'>{error}</Message> }
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>

        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-3" >Sign In</Button>
      </Form>
      <Row>
          <Col>New Customer? 
            {' '} 
            <Link to={redirect ? `/register?redirect=${redirect}`: '/register'}>Register</Link>
          </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
