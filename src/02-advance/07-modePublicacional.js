/*
 * 
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　　　┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　┏━┛
 *      ┃　　　┃　
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug　　
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 * 
 * @Author: SessyoinChen
 * @Date: 2022-08-10 15:13:18
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-08-10 15:36:16
 * @FilePath: \my-app\src\02-advance\07-modePublicacional.js
 * @Description: 40 - modo publicacional
 * 
 */

import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}


var bus = {
    list:[],

    subscribe(callback){
        //console.log(callback)
        this.list.push(callback)
    },
    publish(text){
        // console.log(this.list)
        this.list.forEach(callback=>{
            callback && callback(text)
        })
    }
}

bus.subscribe((value)=>{
    console.log('114514', value)
})

bus.subscribe(()=>{
    console.log('114514x')
})

setTimeout(() => {
    bus.publish("tiansuo haoer111")
}, 0);

setTimeout(() => {
    bus.publish("tiansuo haoer222")
}, 1000);

setTimeout(() => {
    bus.publish("tiansuo haoer333")
}, 2000);