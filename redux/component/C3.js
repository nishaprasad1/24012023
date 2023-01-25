import React, { Component } from 'react'
import xyz from './Context'
export default class C3 extends Component {
    render() {
        return (
            <div>
                <h1>C3 Component</h1>
                <xyz.Consumer>
                    {value => 
                        <p>{value}</p>
                    }
                </xyz.Consumer>
                <hr/>
            </div>
        )
    }
}
