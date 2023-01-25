import React,{useEffect} from 'react'


import { useDispatch } from 'react-redux'
import { productReducer } from '../Redux/reducers/productReducer'
import L1 from './L1'
import L2 from './L2'

export default function Home2() {
    let Dispatch=useDispatch()

  useEffect(()=>{
    fetch('http://localhost:8080/SpringRESTTest/rest/emp/allEmps')
    .then(res=>res.json())
    .then(val=>{
      console.log("Hom2 comp");
      console.log(val);
      Dispatch(
        {type:"setproduct",data:val}
      )
    })
  },[])
  return (
    <div>
        <L1/>
        <L2/>
    </div>
  )
}
