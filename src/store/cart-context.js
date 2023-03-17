import React from "react";

const CartContext=React.createContext({
    Candies:[],
    totalAmount:0,
    addCandy:()=>{}
})

export default CartContext;