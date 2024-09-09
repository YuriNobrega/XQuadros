import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined, Close, Menu } from '@material-ui/icons';
import React, { useState } from 'react';
import styled from 'styled-components';
import { mobile } from "../responsive";
import CartOffCanvas from './CartOffCanvas';

const Container = styled.div`
    height: 120px;
    ${mobile({ height: "80px" })}
    ${mobile({ width: "100%" })}
    position: relative; // Para posicionar o menu hambúrguer
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    ${mobile({ flex: 2 })} // Ajusta o tamanho no mobile
`;

const Language = styled.span`
    font-size: 20px;
    cursor: pointer;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    transition: width 0.4s ease-in-out;
    width: ${props => (props.isExpanded ? "200px" : "50px")};
    ${mobile({ marginLeft: "10px", display: "none" })}
`;

const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    display: ${props => (props.isExpanded ? "block" : "none")};
`;

const Logo = styled.img`
    width: 90px; 
    height: auto;
    ${mobile({ width: "50px" })}
`;

const Center = styled.div`
    flex: 3;
    text-align: center;
    display: flex;
    justify-content: center;
    letter-spacing: 3px;
    
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "end" })}
`;

const MenuItem = styled.div`
    font-size: 28px;
    font-weight: 500;
    cursor: pointer;
    margin: 20px;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    
    &:hover {
        transform: scale(1.1);
        color: #f00;
    }
    
    &:hover::after {
        width: 100%;
    }
    
    &::after {
        content: "";
        position: absolute;
        width: 0;
        height: 2px;
        background-color: #f00;
        bottom: 0;
        left: 0;
        transition: width 0.3s ease;
    }

    ${mobile({ fontSize: "12px", margin: "10px" })}
`;

const HamburgerMenu = styled.div`
    display: none;
    ${mobile({ display: "block", cursor: "pointer" })}
`;

const NavMenu = styled.div`
    display: flex;

    
    ${mobile({ display: props => (props.isOpen ? "flex" : "none"), flexDirection: "column", position: "absolute", top: "80px", right: "0", width: "100%", backgroundColor: "#fff", padding: "10px", boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)" })}
    
`;

const CloseButton = styled.div`
    display: none;
    ${mobile({ display: "none", position: "absolute", top: "10px", right: "10px", cursor: "pointer" })}
`;

const Navbar = () => {
    const [showOffcanvas, setShowOffcanvas] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleShow = () => setShowOffcanvas(true);
    const handleClose = () => setShowOffcanvas(false);
    const handleSearchClick = () => setIsExpanded(!isExpanded);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <>
            <Container>
                <Wrapper>
                    <Left>
                        <Logo src="https://i.ibb.co/6D9fxyH/MOSHED-2024-9-6-19-38-51.gif" />
                        <SearchContainer isExpanded={isExpanded}>
                            <Input isExpanded={isExpanded} placeholder="Procurar" />
                            <Search style={{ color: "gray", fontSize: 16, cursor: "pointer" }} onClick={handleSearchClick} />
                        </SearchContainer>
                    </Left>
                    <HamburgerMenu onClick={toggleMenu}>
                        <Menu style={{ fontSize: "30px" }} />
                    </HamburgerMenu>
                    <NavMenu isOpen={menuOpen}>
                        <CloseButton onClick={toggleMenu}>
                            <Close style={{ fontSize: "30px" }} />
                        </CloseButton>
                        <Center>
                            <MenuItem>QUADROS</MenuItem>
                            <MenuItem>SOBRE</MenuItem>
                            <MenuItem>CONTATO</MenuItem>
                            <MenuItem>REGISTRAR</MenuItem>
                            <MenuItem>LOGAR</MenuItem>
                        </Center>
                    </NavMenu>
                    <Right>
                        <MenuItem onClick={handleShow}>
                            <Badge>
                                <ShoppingCartOutlined />
                            </Badge>
                        </MenuItem>
                    </Right>
                </Wrapper>
            </Container>
            <CartOffCanvas show={showOffcanvas} handleClose={handleClose} />
        </>
    )
}

export default Navbar;
