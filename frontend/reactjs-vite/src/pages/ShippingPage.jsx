import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'

// actions
import { saveShippingAddress } from '../actions/shippingActions'
import { useNavigate } from 'react-router-dom'

// components
import FormContainer from '../components/FormContainer'
import CheckoutSteps from '../components/CheckoutSteps'


function ShippingPage() {
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [country, setCountry] = useState(shippingAddress.country)


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({address, city, postalCode, country}))
        navigate('/payment')
        console.log(address, city, postalCode, country)
    }

    return (
    <FormContainer>
        <CheckoutSteps step1 step2 />
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
            <Form.Group controlId='address'>
                <Form.Label>Address</Form.Label>
                <Form.Control
                required
                type='text'
                placeholder='Address'
                value={address ? address : ''}
                onChange={(e) => setAddress(e.target.value)}
                />
            </Form.Group>




        {/* <h1>Shipping</h1> */}
        <Form.Group controlId='city'>
            <Form.Label>City</Form.Label>
            <Form.Control
            required
            type='text'
            placeholder='City'
            value={city ? city : ''}
            onChange={(e) => setCity(e.target.value)}
            />
        </Form.Group>



    {/* <h1>Shipping</h1> */}
        <Form.Group controlId='postalCode'>
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
            required
            type='text'
            placeholder='Postal Code'
            value={postalCode ? postalCode : ''}
            onChange={(e) => setPostalCode(e.target.value)}
            />
        </Form.Group>




    {/* <h1>Shipping</h1> */}
        <Form.Group controlId='country'>
            <Form.Label>Country</Form.Label>
            <Form.Control
            required
            type='text'
            placeholder='Country'
            value={country ? country : ''}
            onChange={(e) => setCountry(e.target.value)}
            />
        </Form.Group>


            <Button type='submit' className="btn btn-dark mt-3">
                Continue
            </Button>
        </Form>


    </FormContainer>
    )
}

export default ShippingPage