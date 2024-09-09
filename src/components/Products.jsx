import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #1e1e1e;
`
const ProductWrapper = styled.div`
  flex: 1 1 30%; /* Cada produto ocupará 30% da linha */
  max-width: 30%; /* Limita a largura máxima a 30% */
  margin: 10px 0;
  
  @media (max-width: 768px) {
    flex: 1 1 45%; /* Em telas menores (tablet), exibe 2 por linha */
    max-width: 45%;
  }
  
  @media (max-width: 480px) {
    flex: 1 1 100%; /* Em telas pequenas (mobile), exibe 1 por linha */
    max-width: 100%;
  }
`;

const Products = () => {
    return (
        <Container>
            {popularProducts.map(item => (
                <ProductWrapper key={item.id}>
                    <Product item={item} />
                </ProductWrapper>
            ))}
        </Container>
    )
};

export default Products
