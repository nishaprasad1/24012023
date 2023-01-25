import React, { Component } from 'react'
import Category from './Category'
import Left from './Left'
import Right from './Right'

export default class Home1 extends Component {
  constructor(){
    super()
    this.state={
      categoryval:"hgfd"
    }
    this.change=this.change.bind(this)
  }

  change(catdata){
    console.log('paret comp method',catdata);
    console.log(this);
    this.setState({
      categoryval:catdata
    })
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <div className='col-xl-3'>
                <h2>Categories Name</h2><hr/>
                <Left p1={this.change}/>
            </div>
            <div className='col-xl-9'>
                <h2>Product</h2><hr/>
                <Right m1={this.state.categoryval}/>
            </div>

        </div>
        
      </div>
    )
  }
}
