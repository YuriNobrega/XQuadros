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
    width:25%;
    padding: 20px;
    background-color: grey;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 24px;
`
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: black;
    color: #f2f2f2;
    margin-bottom: 10px;
`

const Link = styled.a`
    margin:5px 0px;
    text-decoration: underline;
    cursor: pointer;
    color: black;
`

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>ACESSE SUA CONTA</Title>
                <Form>
                    <Input placeholder="Nome de Usuário" />
                    <Input placeholder="Senha" />
                    <Button>LOGIN</Button>
                    <Link>ESQUECEU SUA SENHA?</Link>
                    <Link>CRIE UMA NOVA CONTA</Link>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Login
