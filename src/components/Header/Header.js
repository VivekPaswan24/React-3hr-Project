import React from "react";
import { Container, Navbar,} from "react-bootstrap";
import HeaderCartButton from "./HeaderCartButton";

const Header=()=>{
    return <header>
       <Navbar bg="dark" variant='dark'>
        <Container>
          <Navbar.Brand href="#home">CandyShop</Navbar.Brand>
          <HeaderCartButton/>
        </Container>
      </Navbar>
    </header>
};

export default Header;