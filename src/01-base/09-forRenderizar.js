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
 * @Date: 2022-07-22 21:43:15
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-22 22:05:02
 * @FilePath: \my-app\src\01-base\09-forRenderizar.js
 * @Description: 15 - renderizar lista
 * https://www.bilibili.com/video/BV1dP4y1c7qd?p=16&share_source=copy_web&vd_source=7f79b57bf36213fddb2207eaa65dd634
 */

import React, { Component } from 'react'

export default class App extends Component {
  
  state = {
    list:[
      {
        id:1,
        text:"111"
      },
      {
        id:3,
        text:"333"
      },
      {
        id:2,
        text:"222"
      }
    ]
  }
  
    render() {
      var newlist = this.state.list.map(item=><li key={item.id}>{item.text}</li>)
      return (
        <div>
          <ul>
          {newlist}
          </ul>
        </div>
      )
  }
}
