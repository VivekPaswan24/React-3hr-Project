import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider=(props)=>{

    const [candies,setCandies]=useState([])

    const addCandyHandler=()=>{

    }

    const cartContext={
        candie:candies,
        totalmaount:0,
        addCandy:addCandyHandler
    }

    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}

export default CartProvider;