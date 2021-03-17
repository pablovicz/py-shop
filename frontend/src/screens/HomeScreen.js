import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'
import {Row, Col} from 'react-bootstrap'

import Product from '../components/Product'



function HomeScreen() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        
        async function fetchProducts (){
            const {data} = await axios.get('/api/products/')
            console.log(data)
            setProducts(data)
        }

        fetchProducts()
    }, [])

    return (
        <div>
            <h1>Lastest Products</h1>
            <Row>
                {products.map(product => (
                    <Col key={product.id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
