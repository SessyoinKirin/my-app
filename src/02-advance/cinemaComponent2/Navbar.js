/*
 * @Author: SessyoinChen
 * @Date: 2022-08-03 20:53:19
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-08-03 21:01:09
 * @FilePath: \my-app\src\02-advance\cinemaComponent\Navbar.js
 * @Description: 35 - cards não controlada
 * 
 */
import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{background:"yellow", textAlign:"center", overflow:"hidden"}}>
        <button style={{float:"left"}}>back</button>
        <span >Sinema</span>
        <button style={{float:"right"}} onClick={()=>{
            this.props.event()
        }} >center</button>
      </div>
    )
  }
}
