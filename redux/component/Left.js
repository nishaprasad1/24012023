import React, { Component } from 'react'

export default class Left extends Component {

  constructor(){
    super();
    this.state = {
      apidata : []
    }
  }
  
  componentDidMount(){
    fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
    .then(val=>{
      console.log("left comp");
      console.log(val);
      this.setState({
        apidata:val
      })
    })
  }

  myfunc(ev){
    console.log(ev);
    console.log(ev.target.innerText);
    this.props.p1(ev.target.innerText);
  }

  render() {
    const API = this.state.apidata;
    return (
      <div>
        <ul>
          {
            API && API.length>0 && API.map(value=>
              <li onClick={(ev)=>{this.myfunc(ev)}}>{value}</li>  
            )
          }
        </ul>
      </div>
    )
  }
}
