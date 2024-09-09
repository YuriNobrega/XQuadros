import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import { sliderItems } from "../data"
import { mobile } from "../responsive"

const Container = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    background-color: black;
    position: relative;
    overflow: hidden;

    ${mobile({ display: "none" })} 
`

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;

    ${mobile({ width: "30px", height: "30px" })} // Ajusta o tamanho das setas no mobile
`

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
    
`

const Slide = styled.div`
    width: 100vw;
    height: 90vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg};

    ${mobile({ height: "60vh" })} // Ajusta a altura do slide no mobile
`
const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`

const Image = styled.img`
    height: 80%;
    ${mobile({ height: "60%" })} // Ajusta a altura da imagem no mobile
`

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    color: white;

    ${mobile({ padding: "20px" })} // Ajusta o padding no mobile
`

const Title = styled.h1`
    font-size: 70px;
    ${mobile({ fontSize: "40px" })} // Ajusta o tamanho da fonte no mobile
`
const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    ${mobile({ margin: "20px 0", fontSize: "14px", letterSpacing: "1px" })} // Ajusta o espaçamento e tamanho da fonte no mobile
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
`;


const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined>
                </ArrowLeftOutlined>
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (


                    <Slide bg={item.bg} key={item.id} >
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Desc>{item.desc}</Desc>
                            <Button>MOSTRE AGORA</Button>

                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined>
                </ArrowRightOutlined>
            </Arrow>
        </Container>

    )
}

export default Slider
