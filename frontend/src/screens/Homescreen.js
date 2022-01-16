import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import {useDispatch,useSelector} from 'react-redux';
import {  listProduct } from  '../actions/productActions'
import Loader from "../components/Loader";
import Message from "../components/Message";


const Homescreen = () => {

   const dispatch = useDispatch();
   const {loading,error,products} = useSelector(state => state.productList);

  useEffect(() => {
    dispatch(listProduct());
  },[dispatch]);
  return (
    <main>
      <Container>
        <h1 className="py-3">Latest Products</h1>
        {loading ? <Loader /> : error ? <Message  variant="danger">{error}</Message> : (<Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={3}>
                <Product  product={product} /> 
            </Col>
          ))}
        </Row>)  }
        
      </Container>
    </main>
  );
};

export default Homescreen;
