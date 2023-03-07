import React, { Component } from 'react'

class Child extends Component{

    state={
        title:""
    }
    render(){
        return <div>Child - {this.state.title}</div>
    }

    componentWillReceiveProps(nextProps){
        console.log("component", nextProps)

        this.setState({
            title:nextProps.text+"Zero"
        })
    }
}

export default class App extends Component {

    state={
        text:"1111111"
    }
  render() {
    return (
      <div>
        {this.state.text}
        <button
        onClick={()=>{
            this.setState({
                text:"2222222"
            })
        }}
        >btn</button>
        <Child text={this.state.text}/>
      </div>
    )
  }
}
