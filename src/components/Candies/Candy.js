import React, { useContext } from "react";
import { Row ,Col, Button} from "react-bootstrap";
import CartContext from "../../store/cart-context";

const Candy=(props)=>{

    const cartCtx=useContext(CartContext)

    const oneClickHandler=()=>{
        cartCtx.addCandy(props)
    }

    const twoClickHandler=()=>{

    }

    const threeClickHandler=()=>{

    }

    return <Row className="my-5">
        <Col>{props.name}</Col>
        <Col>{props.des}</Col>
        <Col>{`${props.price} Rs`}</Col>
        <Col><Button onClick={oneClickHandler}>Buy One</Button></Col>
        <Col><Button onClick={twoClickHandler}>Buy Two</Button></Col>
        <Col><Button onClick={threeClickHandler}>Buy Three</Button></Col>
    </Row>
};

export default Candy;