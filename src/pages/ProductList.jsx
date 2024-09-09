import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Products from '../components/Products'
import Footer from '../components/Footer'


const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #1e1e1e;
    color:#f2f2f2;
    
`
const Filter = styled.div`
    margin: 20px;
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`
const Options = styled.option`
    
`

const ProductList = () => {
    return (

        <Container>
            <Navbar />
            <Announcement />
            <FilterContainer><Title>QUADROS</Title></FilterContainer>
            <FilterContainer>
                <Filter><FilterText>Filtragem:</FilterText>
                    <Select>
                        <Options disabled selected>Genero</Options>
                        <Options>Anime</Options>
                        <Options>Games</Options>
                        <Options>Geek</Options>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Ordenar produtos:</FilterText>
                    <Select>
                        <Options selected>Ordenar pelo mais novo</Options>
                        <Options>Maior preço</Options>
                        <Options>Menor preço</Options>
                        <Options>Popularidade</Options>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products />
            <Footer />
        </Container>
    )
}

export default ProductList
