/*
 * @Author: SessyoinChen
 * @Date: 2022-07-19 21:07:35
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-19 21:33:42
 * @FilePath: \my-app\src\01-base\04-modeloDeComponente.js
 * @Description: 09 - modelos de componentes
 * 
 */
import React, { Component } from 'react'
import './css/01-index.css' //via webpack

export default class App extends Component {
  render() {
    var nome = "Ainz Ooal Gown"
    var obj = {
        background:"yellow",
        // backgroundColor:"red"
        fontSize:"30px"
    }
    return (
      <div>
        {10-20} - {nome}
        {10>20?"aaa":"bbb"}

        <div style={{background:"red"}}>
            111111
        </div>
        <div style={obj}>
            114514
        </div>

        <div className='active'>
            114514
        </div>

        <div id='myapp'>
            114514
        </div>

        <label htmlFor="username">Username: </label>
        <input type="text" id="username"/>
      </div>
    )
  }
}
