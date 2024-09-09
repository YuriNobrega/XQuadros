import { MailOutline, Phone, Room } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"


const Container = styled.div`
    display: flex;
    background-color: black;
    color: white;
    ${mobile({ flexDirection: "column", alignItems: "center" })}
`
const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-left: 60px;
    ${mobile({ marginLeft: "0px", alignItems: "center" })}
`
const Logo = styled.img`
    width: 170px; 
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Desc = styled.p`
    margin: 20px 0px;
    
`
const SocialContainer = styled.div`
    display: flex;
    
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
`
const Center = styled.div`
    flex: 1;
    padding: 20px;
    margin-top: 20px;
    ${mobile({ marginTop: "0px", textAlign: "center" })}
`

const Title = styled.h3`
    margin-bottom: 30px;
`

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
    
`

const Right = styled.div`
    flex: 1;
    margin-top: 30px;
    margin-left: 70px;
    ${mobile({ marginTop: "0px", textAlign: "center" })}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    
`
const LogoPayment = styled.img`
    border-radius: 10px;
`


const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo src="https://i.ibb.co/qJftdjp/MOSHED-2024-9-6-19-38-51.gif"></Logo>
                <Desc>                <ContactItem><Phone style={{ marginRight: "10px" }} />+55 65 9999-9999</ContactItem>
                    <ContactItem><MailOutline style={{ marginRight: "10px" }} />placeholder@e-mail.com</ContactItem>
                </Desc>
            </Left>
            <Center>
                <Title ><LogoPayment src="https://i0.wp.com/loja.otakubfx.com.br/wp-content/uploads/2023/07/fromas-de-pagamento-1.png?w=290&ssl=1"></LogoPayment></Title>
                <List>
                    <ContactItem >CNPJ: 00.000.000/0001-00</ContactItem>
                    <ContactItem><Room style={{ marginRight: "10px" }} />0, Rua dos bobos, Hollywood 98336</ContactItem>
                </List>
            </Center>
            <Right>
                <ContactItem>Sobre Nós</ContactItem>
                <ContactItem>Porque comprar?</ContactItem>
                <ContactItem>Termos e condições</ContactItem>
                <ContactItem>Política de Privacidade</ContactItem>
                <ContactItem>Política de troca</ContactItem>
                <ContactItem>Política de cancelamento</ContactItem>
                <ContactItem>Política de entrega</ContactItem>
            </Right>
        </Container>
    )
}

export default Footer
