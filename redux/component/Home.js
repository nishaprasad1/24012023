
import React, { Component, PureComponent } from 'react'
import C1 from './C1';
import xyz from './Context';
console.log(xyz);

export default class Home extends Component {
    constructor (){
        super()
        this.state={
            city:"Pune"
        }
    }
    myfun(ev){
        // console.log(ev);
        console.log(ev.target.value);
        this.setState({city:ev.target.value})
    }
  render() {
    return (
      <div>
        <h1>Home</h1>
        <input onChange={(ev)=>{this.myfun(ev)}} type="text"/>
        <hr/>
        <xyz.Provider value={this.state.city}>
            <C1 m1={this.state.city}/> 
        </xyz.Provider>
        
        
      </div>
    )
  }
}
