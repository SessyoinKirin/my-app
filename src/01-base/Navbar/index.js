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
 * @Date: 2022-07-28 19:35:38
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-29 20:19:47
 * @FilePath: \my-app\src\01-base\Navbar\index.js
 * @Description: 26 - propriedade I
 * 
 */

import React, { Component } from 'react'
import Prop from 'prop-types'
export default class Navbar extends Component {
    state={

    }
    static propTypes = {
        title: Prop.string,
        leftshow: Prop.bool
    }

    static defaultProps={
      leftshow:true
    }
  render() {
    console.log(this.props)
    let {title, leftshow} = this.props
    return (
      <div>
        {leftshow && <button>Voltar</button>}
        navbar-{title}
        <button>Home</button>
      </div>
    )
  }
}




// class Test{
//     a = 1
//     static a =100
// }
// var obj = new Test();
// console.log(Test.a, obj.a)