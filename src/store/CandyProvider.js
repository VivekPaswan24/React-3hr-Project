import React, { useState } from "react";
import CandyContext from "./cany-context";

const CandyProvider=(props)=>{
    const [candies,setCandies]=useState([])

    const addCandy=(candy)=>{
        setCandies((prevCandies)=>{
            const upadatedCandies=prevCandies.concat(candy);
            return upadatedCandies;
        })
    }

    const candyContext={
        candies:candies,
        addCandy:addCandy
    }

    return <CandyContext.Provider value={candyContext}>
        {props.children}
    </CandyContext.Provider>
}

export default CandyProvider;