import React, { useState, useEffect } from 'react'

import { Row, Col, Container } from 'react-bootstrap'

import axios from 'axios'

// import products from '../products'

// components
import Product from '../components/Product'

function HomePage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchProducts() {
      const{data} = await axios.get('http://127.0.0.1:8000/api/products/')
      setProducts(data)
    }

    fetchProducts()
  }, [])

  return (
    <div>
      HomePage

      <Container>

        <Row>
          {products.map(product => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>

      </Container>

    </div>
  )
}

export default HomePage