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
 * @Date: 2022-07-20 20:04:57
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-20 20:33:18
 * @FilePath: \my-app\src\01-base\06-eventosII.js
 * @Description: 11 - 12 eventos II
 * 
 */

import React, { Component } from 'react'

export default class App extends Component {
    a=100
  render() {
    return (
      <div>
        <input/>
        <button onClick={()=>{
            console.log('click', this.a)
            // com função da seta é possivel acessar variavel fora de render
        }}>add1</button>

        <button onClick={this.handleClick2.bind(this)}>add2</button>

        <button onClick={this.handleClick3}>add3</button>

        <button onClick={()=>this.handleClick4()}>add4</button>
      </div>
    )
  }

  handleClick2(){
    console.log('click2', this.a)
    // não é possivel encontrar variavel 'a', por ser undefined
  }

  handleClick3 = ()=>{
    console.log('click3', this.a)
  }

  handleClick4 = ()=>{
    console.log('click4', this.a)
  }

}


// xxxx.function.call(yyyy) = yyyy.function()

// xxxx.function.bind(yyyy) = yyyy.function(), mas precisa ativar manualmente

// xxxx.function.apply(yyyy) = yyyy.function()