import React from 'react'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { mobile } from '../responsive'

const Container = styled.div`
        ${mobile({ height: "80px" })}
        ${mobile({ maxWidth: "100" })}
`


const Home = () => {
    return (
        <Container>
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Footer />
        </Container>
    )
}

export default Home
