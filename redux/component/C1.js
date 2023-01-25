import React, { Component } from 'react'
import C2 from './C2'

export default class C1 extends Component {
  render() {
    return (
      <div>
        <h1>C1 Comp</h1>
        <hr/>
        <C2 m2={this.props.m1}/>
      </div>
    )
  }
}
