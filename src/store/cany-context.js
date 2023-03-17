import React from "react";

const CandyContext=React.createContext({
    candies:[],
    addCandy:(candy)=>{}
})

export default CandyContext;