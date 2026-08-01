import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, Form } from 'react-bootstrap'
import Rating from '../components/Rating'

import Loader from '../components/Loader'

import { API_BASE_URL } from '../constants/backendConstants'

import Message from '../components/Message'
import api from '../api/axios'

function ProductsPage() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [qty, setQty] = useState(1)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const navigate = useNavigate()
    console.log("Django Image Path:", product?.image);

    const addToCartHandler = () => {
        navigate(`/cart/${id}?qty=${qty}`)
    }

    useEffect(() => {
        async function fetchProduct() {
            try {
                const { data } = await api.get(`/api/product/${id}`)
                setProduct(data)
            } catch (err) {
                setError('Error loading product.')
            } finally {
                setLoading(false)
            }
        }
        fetchProduct()
    }, [id])

// // 🔴 Put this right before your "return (" statement
// if (typeof props !== 'undefined') console.log("All Props:", props);

// // If you are fetching data using useState, look for your state variable name 
// // (e.g., products, product, data) and log it here:
// // console.log("My state data looks like:", products); 
    
    return (
        <div>
            <Link to='/' className='btn btn-secondary my-3'>
                Go back
            </Link>

            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                <Row>
                    <Col md={6}>
                        <Image src={product.image} alt={product.name} fluid />
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

                            <ListGroup.Item>
                                <Row>
                                    <Col>Availability:</Col>
                                    <Col>
                                        {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={3}>
                        <Card>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Price:</Col>
                                        <Col><strong>${product.price}</strong></Col>
                                    </Row>
                                </ListGroup.Item>

                                {product.countInStock > 0 && (
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Qty</Col>
                                            <Col xs='auto' className='my-1'>
                                                <Form.Control
                                                    as='select'
                                                    value={qty}
                                                    onChange={(e) => setQty(e.target.value)}
                                                >
                                                    {[...Array(product.countInStock).keys()].map((x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Col>
                                        </Row>
                                    </ListGroup.Item>
                                )}

                                <ListGroup.Item>
                                    <Row>
                                        <Button
                                            onClick={addToCartHandler}
                                            className='btn-block'
                                            type='button'
                                            disabled={product.countInStock === 0}
                                        >
                                            Add to Cart
                                        </Button>
                                    </Row>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            )}
        </div>
    )
}

export default ProductsPage
