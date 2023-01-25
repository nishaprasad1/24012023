import React from 'react'
import { useSelector } from 'react-redux'
export default function L1() {
   let datainl1= useSelector(state=>state.allProducts.products) 
   console.log("datainl1");
   console.log(datainl1);
  return (
    <div>
             <h1>L1 Component</h1>

    </div>
  )
}
