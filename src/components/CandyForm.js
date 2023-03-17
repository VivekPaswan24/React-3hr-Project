import React, { useContext, useRef } from "react";
import { Container,Form,Button } from "react-bootstrap";
import CandyContext from "../store/cany-context";

const CandyForm = () => {

    const candyCtx=useContext(CandyContext);

    const candyNameInputRef=useRef();
    const candyDesInputRef=useRef();
    const candyPriceInputRef=useRef();

    const submitHandler=event=>{
        event.preventDefault()
        const enteredCandyName=candyNameInputRef.current.value;
        const enteredCandyDes=candyDesInputRef.current.value;
        const enteredCandyPrice=candyPriceInputRef.current.value;

        const candyDetail={
            name:enteredCandyName,
            description:enteredCandyDes,
            price:enteredCandyPrice,
        }

        candyCtx.addCandy(candyDetail)

        console.log('hi')

    }

  return (
    <Container>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Candy Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Candy Name" ref={candyNameInputRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicDes">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Description"  ref={candyDesInputRef}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Price" ref={candyPriceInputRef} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Candy
        </Button>
      </Form>
    </Container>
  );
};

export default CandyForm;
