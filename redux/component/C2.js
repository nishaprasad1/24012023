import React, { Component } from 'react'

import C3 from './C3'
export default class C2 extends Component {
  render() {
    return (
      <div>
        <h1>C2 Comp</h1>
        <p>{this.props.m2}</p>
        <hr/>
        <C3 />

      </div>
    )
  }
}
