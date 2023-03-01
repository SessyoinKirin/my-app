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
 * @Date: 2022-07-25 21:19:32
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-26 20:07:25
 * @FilePath: \my-app\src\01-base\12-cards.js
 * @Description: 21 - seleção de card
 * 
 */

import React, { Component } from 'react'
import './css/02-vendaAssentos.css'
import Film from './cinemaComponent/Film'
import Cinema from './cinemaComponent/Cinema'
import Center from './cinemaComponent/Center'

export default class App extends Component {
    state = {
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
        current:0
    }

    which(){
        switch (this.state.current) {
            case 0:
                return <Film></Film>
                break;
            case 1:
                return <Cinema></Cinema>
                break;
            case 2:
                return <Center></Center>
                break;
            
            default:
                return null
        }
    }
  render() {
    return (
      <div>
        {/* {
            this.state.current===0 && <Film></Film>
        }
        {
            this.state.current===1 && <Cinema></Cinema>
        }
        {this.state.current===2 && <Center></Center>} */}

        {
            this.which()
        }
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
  }
}
