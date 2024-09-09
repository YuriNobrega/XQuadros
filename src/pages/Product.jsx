import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove, LocalShipping } from '@material-ui/icons'
import { mobile } from "../responsive"


const Container = styled.div`
    ${mobile({ height: "80px" })}
    ${mobile({ width: "100%" })}
`

const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    background-color: #1e1e1e;
    color: #f2f2f2;
    ${mobile({ padding: "0px" })}
    ${mobile({ paddingBottom: "50px" })}

    ${mobile({ display: "block" })}

`
const ImageContainer = styled.div`
    flex:1;
    ${mobile({ marginBottom: "30px" })}
`
const Image = styled.img`
    width: 90%;
    ${mobile({ width: "100%" })} 
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
`
const Title = styled.h1`
    
`
const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    display: flex;
    align-items: center;
`
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0px 5px;
    cursor: pointer;
`
const FilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`
const FilterSizeOption = styled.option`
    
`
const AddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    color: white;
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border: none; // Remove a borda padrão
    border-radius: 5px; // Bordas arredondadas
    padding: 10px 20px; // Espaçamento interno
    font-size: 16px; // Tamanho da fonte
    cursor: pointer; // Cursor de ponteiro
    transition: all 0.3s ease; // Transição suave para todos os estados
    outline: none; // Remove o contorno padrão

  &:hover {
    background-color: red; // Cor de fundo no hover
    transform: scale(1.05); // Leve aumento no tamanho
  }

  &:active {
    background-color: red; // Cor de fundo quando pressionado
    transform: scale(0.95); // Reduz o tamanho quando pressionado
  }

  &:focus {
    outline: none; // Remove o contorno quando focado
  }

  ${mobile({ fontSize: "14px", padding: "8px" })} // Ajusta o tamanho da fonte e padding no mobile
`

const Product = () => {
    return (
        <Container>
            <Announcement />
            <Navbar />
            <Wrapper>
                <ImageContainer>
                    <Image src="https://i0.wp.com/loja.otakubfx.com.br/wp-content/uploads/2020/03/camiseta-devilman-1-2.jpg?fit=1000%2C1000&ssl=1" />
                </ImageContainer>
                <InfoContainer>
                    <Title>CAMISETA DEVILMAN</Title>

                    <FilterTitle><LocalShipping /> FRETE GRÁTIS SE LEVAR 3</FilterTitle>

                    <Desc>Camiseta Devilman Crybaby. A grande adaptação de Devilman trazida pela Netflix foi muito bem recebida, principalmente no ocidente. O clássico foi renovado, o que antes era popular apenas no japão, agora ganhou o mundo. Baseado no mangá Devilman de Go Nagai.</Desc>
                    <Price>$20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>COR</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="blue" />
                            <FilterColor color="grey" />
                        </Filter>
                        <Filter>
                            <FilterTitle>TAMANHO</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>P</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>G</FilterSizeOption>
                                <FilterSizeOption>GG</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove></Remove>
                            <Amount>1</Amount>
                            <Add></Add>
                            <Button>ADICIONAR AO CARRINHO</Button>
                        </AmountContainer>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Product
