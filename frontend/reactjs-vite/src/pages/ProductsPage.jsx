import React from 'react'

import { Link, useParams } from 'react-router-dom'

import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'

// products.js
import products from '../products'

function ProductsPage() {
    const { id } = useParams();
    const product = products.find((p) => p._id == id);

  return (
    <div>
        <Link to='/' className='btn btn-secondary my-3'>
            Go back
        </Link>

        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name}></Image>
            </Col>

            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <h3>{product.description}</h3>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating 
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                            color={"#f8e825"}
                        />

                    </ListGroup.Item>

                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

                </ListGroup>
            </Col>

            <Col md={3}>
                <Card>
                    <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <Row>
                            <Col>Price:</Col>
                            <Col>
                                <strong>${product.price}</strong>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                        <Row>
                            <Col>Availability</Col>
                            <Col>
                                ${product.countInStock > 0 ? "In stock" : "Out of Stock"}
                            </Col>
                        </Row>

                    <ListGroup.Item>
                        <Row>
                            <Button
                                // onClick={addToCartHandler}
                                className='btn-block'
                                type='button'
                                disabled={product.countInStock == 0}
                                > Add to Cart
                            </Button>
                        </Row>
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Rating 
                            value={product.rating}
                            text={`${product.numReviews} reviews`}
                            color={"#f8e825"}
                        />

                    </ListGroup.Item>

                    <ListGroup.Item>Price: ${product.price}</ListGroup.Item>

                </ListGroup>
                </Card>
            </Col>


        </Row>


    </div>
    

  )
}

export default ProductsPage