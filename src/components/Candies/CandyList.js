import React, { useContext } from "react";
import CandyContext from "../../store/cany-context";
import Candy from "./Candy";

const CandyList=()=>{
    const candyCtx=useContext(CandyContext);

    return <>
    {candyCtx.candies.map((candy)=><Candy key={candy.name} name={candy.name} des={candy.description} price={candy.price}  /> )}
    </>
};

export default CandyList;