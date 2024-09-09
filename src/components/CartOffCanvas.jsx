import React from 'react';
import { Offcanvas, Button } from 'react-bootstrap';
import { Add, Remove } from '@material-ui/icons'
import styled from 'styled-components'


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%; /* Certifica que o wrapper ocupe todo o espaço disponível */
`;

const Title = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10vh;
`;

const TopButton = styled.button`
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props =>
        props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
  margin: 0 10px;
`;

const TopTexts = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  width: 100%;
  margin: 20px 0;
`;

const Summary = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  width: 100%;
  max-width: 400px;
  margin-top: 20px;
`;

const Product = styled.div`
  display: flex;
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 100px;
  height: auto;
  margin-right: 20px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: left;
`;

const ProductName = styled.span`
  font-size: 16px;
`;

const ProductId = styled.span`
  font-size: 14px;
`;

const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  display: inline-block;
`;

const ProductSize = styled.div`
  font-size: 14px;
`;

const PriceDetail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 0 10px;
`;

const ProductPrice = styled.div`
  font-size: 20px;
  font-weight: 200;
`;

const SummaryTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;

const SummaryItem = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "20px"};
`;

const SummaryItemText = styled.span`
  font-size: 16px;
`;

const SummaryItemPrice = styled.span`
  font-size: 16px;
`;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
  cursor: pointer;
`;


const CartOffCanvas = ({ show, handleClose }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Container>
                    <Wrapper>
                        <Title>SEU CARRINHO</Title>
                        <Top>
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
                                <Hr />
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
                        </Top>
                    </Wrapper>


                </Container>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default CartOffCanvas;