/*
 *  ┌─────────────────────────────────────────────────────────────┐
 *  │┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┐│
 *  ││Esc│!1 │@2 │#3 │$4 │%5 │^6 │&7 │*8 │(9 │)0 │_- │+= │|\ │`~ ││
 *  │├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┤│
 *  ││ Tab │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │{[ │}] │ BS  ││
 *  │├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴─────┤│
 *  ││ Ctrl │ A │ S │ D │ F │ G │ H │ J │ K │ L │: ;│" '│ Enter  ││
 *  │├──────┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴────┬───┤│
 *  ││ Shift  │ Z │ X │ C │ V │ B │ N │ M │< ,│> .│? /│Shift │Fn ││
 *  │└─────┬──┴┬──┴──┬┴───┴───┴───┴───┴───┴──┬┴───┴┬──┴┬─────┴───┘│
 *  │      │Fn │ Alt │         Space         │ Alt │Win│   HHKB   │
 *  │      └───┴─────┴───────────────────────┴─────┴───┘          │
 *  └─────────────────────────────────────────────────────────────┘
 * 
 * @Author: SessyoinChen
 * @Date: 2022-07-28 19:33:25
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-29 20:25:00
 * @FilePath: \my-app\src\01-base\16-props.js
 * @Description: 26 - propriedade I
 * 
 */

import React, { Component } from 'react'
import Navbar from './Navbar/index'
export default class App extends Component {
  render() {

    var obj ={
      title:"teste",
      leftshow:false
    }
    return (
      <div>
        <div>
            <h2>Inicio</h2>
            <Navbar title='Inicio' leftshow={false}/>
        </div>
        <div>
            <h2>Lista</h2>
            <Navbar title='Lista'/>
        </div>
        <div>
            <h2>Carrinho</h2>
            {/* <Navbar title={obj.title} leftshow={obj.leftshow}/> */}
            <Navbar {...obj} />
        </div>
      </div>
    )
  }
}
