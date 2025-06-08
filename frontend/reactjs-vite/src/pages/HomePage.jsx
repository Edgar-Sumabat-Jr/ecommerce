import React, { useState, useEffect } from 'react'

import { Row, Col, Container } from 'react-bootstrap'

import axios from 'axios'

// import products from '../products'

// components
import Product from '../components/Product'
import Loader from '../components/Loader'
import Message from '../components/Message'


import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

function HomePage() {
  // const [products, setProducts] = useState([])
  const dispatch = useDispatch()
  const productList = useSelector(state => state.productList)
  const { error, loading, products } = productList

  // useEffect(() => {
  //   async function fetchProducts() {
  //     const{data} = await axios.get('http://127.0.0.1:8000/api/products/')
  //     setProducts(data)
  //   }

  //   fetchProducts()
  // }, [])

  useEffect(() => {
    dispatch(listProducts())
  }, [])


  return (
    <div>
      HomePage

      <Container>

        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant='danger'>{error}</Message>
        ) : (
          <Row>
            {products.map(product => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        )}


      </Container>

    </div>
  )
}

export default HomePage