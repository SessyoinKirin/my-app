import React, { Component } from 'react'

class Box extends Component{

    shouldComponentUpdate(nextProps){
        if(this.props.current === this.props.index || nextProps.current === nextProps.index){
            // console.log('this.props.current', this.props.current)
            // console.log('this.props.index', this.props.index)
            // console.log('nextProps.current', nextProps.current)
            // console.log('nextProps.index', nextProps.index)
            return true
        }
        return false
    }
    render(){
        console.log('render')
        return<div style={{width:"100px", height:"100px", border:this.props.current === this.props.index? "1px solid red":"1px solid gray", margin:"10px", float:"left"}}>

        </div>
    }
}


export default class App extends Component {
    state={
        list:["00", "01", "02", "03", "04", "05", "06", "07", "08", "09"],
        current:0
    }
  render() {
    return (
      <div>
        <input type="number" onChange={(evt)=>{
            this.setState({
                current:Number(evt.target.value)
            })
        }} value={this.state.current}/>
        <div style={{overflow:"hidden"}}>
        {this.state.list.map((item, index)=>
            <Box key={item} current={this.state.current} index={index}/>
            )}
        </div>
      </div>
    )
  }
}
