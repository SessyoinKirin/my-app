/*
 *                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 * 
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *            佛祖保佑     永不宕机     永无BUG
 * 
 * @Author: SessyoinChen
 * @Date: 2022-07-21 20:47:33
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-22 21:39:19
 * @FilePath: \my-app\src\01-base\08-state.js
 * @Description: 14 - início de estado
 * 
 */

import React, { Component } from 'react'

export default class App extends Component {

    // state = {
    //     text:"like",
    //     show:true
    // }

    constructor(){
      super()
      this.state = {
        text:"like",
        show:true,
      name:"hannibal"
      }
    }

  render() {
    return (
      <div>
        <h1>Seja bem-vindo ao React-{this.state.name}</h1>

        <button onClick={()=>{
            this.setState({
                show:!this.state.show,
                name:"lecter"
            })
            if(this.state.show){
                console.log("liked")
            }else{
                console.log("unliked")
            }
        }}>{this.state.show?'like':'unlike'}</button>
      </div>
    )
  }
}
