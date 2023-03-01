/*
 * _______________#########_______________________ 
 * ______________############_____________________ 
 * ______________#############____________________ 
 * _____________##__###########___________________ 
 * ____________###__######_#####__________________ 
 * ____________###_#######___####_________________ 
 * ___________###__##########_####________________ 
 * __________####__###########_####_______________ 
 * ________#####___###########__#####_____________ 
 * _______######___###_########___#####___________ 
 * _______#####___###___########___######_________ 
 * ______######___###__###########___######_______ 
 * _____######___####_##############__######______ 
 * ____#######__#####################_#######_____ 
 * ____#######__##############################____ 
 * ___#######__######_#################_#######___ 
 * ___#######__######_######_#########___######___ 
 * ___#######____##__######___######_____######___ 
 * ___#######________######____#####_____#####____ 
 * ____######________#####_____#####_____####_____ 
 * _____#####________####______#####_____###______ 
 * ______#####______;###________###______#________ 
 * ________##_______####________####______________ 
 * 
 * @Author: SessyoinChen
 * @Date: 2022-08-01 20:09:27
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-08-01 20:42:19
 * @FilePath: \my-app\src\01-base\22-controlTodoList.js
 * @Description: 33 - control todo list
 * 
 */

import React, { Component } from 'react'
import './css/01-index.css'

export default class App extends Component {
    // myref = React.createRef()

    state={
        mytext:'',
        list:[{
            id:1,
            text:"aaa",
            isChecked:false
        },
        {
            id:2,
            text:"bbb",
            isChecked:false
        },
        {
            id:3,
            text:"ccc",
            isChecked:false
        }
    ]
    }
  render() {
    return (
      <div>
        <input value={this.state.mytext} onChange={(event)=>{
            this.setState({
                mytext:event.target.value
            })
        }}/>
        <button onClick={this.handleClick}>add1</button>
        <ul>
            {
                this.state.list.map((item, index)=><li key={item.id}>
               
                <input type="checkbox" checked={item.isChecked} onChange={()=>{
                    this.handleChecked(index)
                }}/>
                <span dangerouslySetInnerHTML= {{
                    __html:item.text
                }} style={{textDecoration:item.isChecked?"line-through":""}}></span>
                
                <button onClick={()=>this.handleDelClick(index)}>del</button>
                </li>)
            }
        </ul>
        

    {/* {this.state.list.length===0?<div>Congratulations, you exterminated all!!</div>:null} */}

    {/* {this.state.list.length===0 && <div>Congratulations, you exterminated all!!</div>} */}

    <div className={this.state.list.length===0?'':'hidden'}>
    Congratulations, you exterminated all!!
    </div>
      </div>
    )
  }

handleChecked=(index)=>{
    console.log(index)
    let newlist = [...this.state.list]
    newlist[index].isChecked=!newlist[index].isChecked
    this.setState({
        list:newlist
    })
}

  handleClick=()=>{
    // console.log(this.myref.current.value)


    let newlist = [...this.state.list]
    newlist.push({
        id:Math.random()*1000000000,
        text: this.state.mytext,
        isChecked:false
    })
    // this.state.list.push(this.myref.current.value)

    this.setState({
        list: newlist,
        mytext:""
    })

    //esvaziar input:
    // this.myref.current.value = ""
  }

  handleDelClick(index){
    console.log('del-click', index)

    let newlist = this.state.list.slice()

    newlist .splice(index, 1)

    this.setState({
        list:newlist
    })
  }
}