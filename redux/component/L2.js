import React from 'react'
import { useSelector } from 'react-redux';

export default function L2() {
    let datainl2= useSelector(state=>state.allProducts.products) 
    console.log("datainl2");
    console.log(datainl2);
  return (
    <div>
      <h1>L2 Component</h1>
    </div>
  )
}
