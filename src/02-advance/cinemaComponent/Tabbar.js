/*
 * @Author: SessyoinChen
 * @Date: 2022-08-03 20:42:15
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-08-03 21:15:06
 * @FilePath: \my-app\src\02-advance\cinemaComponent\Tabbar.js
 * @Description: 35 - cards não controlados
 * 
 */
import React, { Component } from 'react'

export default class Tabbar extends Component {
    state={
        list:[
            {
                id:1,
                text:"filme"
            },
            {
                id:2,
                text:"cinema"
            },
            {
                id:3,
                text:"center"
            }
        ],
        current:this.props.defaultValue
    }
  render() {
    return (
      <div>
        <ul>
            {
                this.state.list.map((item, index)=><li key={item.id} className={
                    this.state.current===index?'active':''
                } onClick={()=>{
                    this.handleClick(index)
                }}>
                    {item.text}
                </li>)
            }
        </ul>
      </div>
    )
  }

  handleClick(index){
    this.setState({
        current:index
    })

    this.props.event(index)
  }
}
