import React, { Component } from 'react'

export default class Right extends Component {

  constructor(){
    super();
    this.state = {
      apidata : []
    }
  }

  componentDidMount(){
    console.log("didmount cycle call");
      fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then(val=>{
        console.log("Right comp");
        console.log(val);
        this.setState({
          apidata:val
        })
      })
  }

  componentDidUpdate(){
    console.log("didupdate cycle call");
    console.log(this.props.m1);
  }

  

  render() {
    const API = this.state.apidata
    return (
      <div className='row'>
        {this.props.m1}
        <hr />
          {
            API && API.length>0 && API.map(val=>
              <div className='col-xl-3'>
                <img src={val.image} className='img-fluid' />
                <h2>{val.price}</h2>
                <p>{val.title}</p>
              </div>  
            )
          }
      </div>
    )
  }
}
