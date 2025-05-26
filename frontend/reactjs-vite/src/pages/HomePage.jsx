import React from 'react'

import { Row, Col, Container } from 'react-bootstrap'

import products from '../products'

// components
import Product from '../components/Product'

function HomePage() {
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