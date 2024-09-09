import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: linear-gradient(rgba (255, 255, 255, 0.5), rgba(255,255,255,0.5));
    display: flex;
    align-items: center;
    justify-content: center;
`

const Wrapper = styled.div`
    width:40%;
    padding: 20px;
    background-color: grey;
`
const Form = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const Title = styled.h1`
    font-size: 24px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: white;
`

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>CRIE UMA CONTA</Title>
                <Form>
                    <Input placeholder="Nome completo" />
                    <Input placeholder="Nome de Usuário" />
                    <Input placeholder="E-mail" />
                    <Input placeholder="Senha" />
                    <Input placeholder="Confirme sua senha" />
                    <Agreement>Ao continuar, você estará de acordo com nossa política de privacidade e termos e condições.</Agreement>
                    <Button>CRIAR</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register
