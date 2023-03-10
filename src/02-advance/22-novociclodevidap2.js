import React, { Component } from 'react'

export default class App extends Component {

    state={
        mytext:"111"
    }
  render() {
    console.log('render')
    return (
        
      <div>
        App
        <button onClick={()=>{
            this.setState({
                mytext:"222"
            })
        }}>botao</button>
        {this.state.mytext}
      </div>
    )
  }

//   componentWillUpdate(){
//     console.log('update')
//   }
  componentDidUpdate(prevProps, prevState, value){
    console.log('did update', value)
  }

  getSnapshotBeforeUpdate(){
    console.log('getsnapchot')
    return 100
  }
}
