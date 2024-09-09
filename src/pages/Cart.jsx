import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import styled from 'styled-components'
import { Add, Remove } from '@material-ui/icons'
import 'bootstrap/dist/css/bootstrap.min.css';

const Container = styled.div`
    
`

const Wrapper = styled.div`
    padding: 20px;
    font-weight: 300;
    text-align: center;
    background-color: #1e1e1e;
`
const Title = styled.h1`
    color: white;
`
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`
const TopButton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props =>
        props.type === "filled" ? "black" : "transparent"};
    color: ${props => props.type === "filled" && "white"};
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`
const TopTexts = styled.div`
    
`
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
    color: white;
`

const Info = styled.div`
    flex: 3;
`

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`
const Summary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`

const Product = styled.div`
    display: flex;
    justify-content: space-between;
`

const ProductDetail = styled.div`
    flex: 2;
    display: flex;
`
const Image = styled.img`
    width: 200px;
`
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: justify;
`
const ProductName = styled.span`
    
`
const ProductId = styled.span`
    
`
const ProductColor = styled.span`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
`
const ProductSize = styled.div`
    
`
const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`


const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`

const ProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
`
const SummaryTitle = styled.h1`
    
`
const SummaryItem = styled.div`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${props => props.type === "total" && "500"};
    font-size: ${props => props.type === "total" && "45px"};
`
const SummaryItemText = styled.span`
    font-size: 25px;
`
const SummaryItemPrice = styled.span`
    font-size: 25px;
`
const SummaryButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`

const Cart = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Title>SEU CARRINHO</Title>
                <Top>
                    <TopButton>CONTINUE COMPRANDO</TopButton>
                    <TopTexts>
                        <TopText>Carrinho de Compras(2)</TopText>
                        <TopText>Lista de Desejos</TopText>
                    </TopTexts>
                    <TopButton type="filled">CHECKOUT</TopButton>

                </Top>
                <Bottom>
                    <Info>
                        <Product>
                            <ProductDetail>

                                <Image src="https://i0.wp.com/loja.otakubfx.com.br/wp-content/uploads/2023/10/camiseta-perfect-blue-4.jpg?w=1000&ssl=1" />
                                <Details>
                                    <ProductName><b>Produto:</b> CAMISETA PERFECT BLUE</ProductName>
                                    <ProductId><b>ID:</b> 48321748</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Tamanho:</b> M</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 30</ProductPrice>
                            </PriceDetail>
                        </Product>
                        <Hr />
                        <Product>
                            <ProductDetail>

                                <Image src="https://i0.wp.com/loja.otakubfx.com.br/wp-content/uploads/2019/03/camiseta-mob-1000000-3.jpg?w=703&ssl=1" />
                                <Details>
                                    <ProductName><b>Produto:</b> CAMISETA MOB PSYCHO 1000000?????%</ProductName>
                                    <ProductId><b>ID:</b> 324732</ProductId>
                                    <ProductColor color="black" />
                                    <ProductSize><b>Tamanho:</b> P</ProductSize>
                                </Details>
                            </ProductDetail>
                            <PriceDetail>
                                <ProductAmountContainer>
                                    <Add />
                                    <ProductAmount>2</ProductAmount>
                                    <Remove />
                                </ProductAmountContainer>
                                <ProductPrice>$ 20</ProductPrice>
                            </PriceDetail>
                        </Product>
                    </Info>
                    <Summary>
                        <SummaryTitle>RESUMO DA COMPRA</SummaryTitle>
                        <SummaryItem>
                            <SummaryItemText>Subtotal</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Frete</SummaryItemText>
                            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem>
                            <SummaryItemText>Desconto</SummaryItemText>
                            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryItem type="total">
                            <SummaryItemText>Total</SummaryItemText>
                            <SummaryItemPrice>$ 80</SummaryItemPrice>
                        </SummaryItem>
                        <SummaryButton>CHECKOUT</SummaryButton>
                    </Summary>
                </Bottom>
            </Wrapper>
            <Footer />

        </Container>
    )
}

export default Cart
