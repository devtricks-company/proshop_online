import React from 'react'
import {Card} from 'react-bootstrap';
import Rating from './Rating';
import {Link} from 'react-router-dom'
const Product = ({product}) => {
    return (
        <Card className='my-3'>
            <Link to={`/product/${product._id}`}>
                <Card.Img variant='top' src={product.image} />
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                <Card.Title as="div">
                    <strong className='h5'>{product.name}</strong>
                </Card.Title>
                </Link>
                <Card.Text as="div">
                 <Rating value={product.rating} numReviews={product.numReviews} />
                </Card.Text>
                <Card.Text as="h4" className='my-3'>
                    ${product.price}
                </Card.Text>
                
            </Card.Body>
        </Card>
    )
}

export default Product
