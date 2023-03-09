import React, { Component } from 'react'

export default class App extends Component {

  state = {
    myname: "zero",
    myage:100
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log('getDerived', nextState)
    return {
      myname: nextState.myname.substring(0,1).toUpperCase()+nextState.myname.substring(1)
    }
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            myname:"grande"
          })
        }}>btn</button>
        app - {this.state.myname} - {this.state.myage}
      </div>
    )
  }
}
