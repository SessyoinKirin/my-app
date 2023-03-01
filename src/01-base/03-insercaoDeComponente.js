/*
 * @Author: SessyoinChen
 * @Date: 2022-07-19 20:52:07
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-19 21:04:31
 * @FilePath: \my-app\src\01-base\03-insercaoDeComponente.js
 * @Description: 08 - criação de conjunto de componentes
 * 
 */
import React, { Component } from 'react'

class Navbar extends Component{
    render(){
        return (
            <div>
                Navbar
                <Child></Child>
            </div>
        )
    }
}

class Child extends Component{
    render(){
        return(
            <div>
                Child
            </div>
        )
    }
}

function Swiper(){
    return (
        <div>Swiper</div>
    )
}

const Tabbar =()=>{
    return <div>Tabbar</div>
}

// const Tabbar =()=><div>Tabbar</div>

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>

        <Swiper></Swiper>

        <Tabbar></Tabbar>
      </div>
    )
  }
}
