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
 * @Date: 2022-08-04 20:35:23
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-08-04 20:54:33
 * @FilePath: \my-app\src\02-advance\03-controlCard.js
 * @Description: 36 - card sem state 
 * 
 */


import React, { Component } from 'react'
import './css/02-vendaAssentos.css'
import Film from './cinemaComponent2/Film'
import Cinema from './cinemaComponent2/Cinema'
import Center from './cinemaComponent2/Center'
import Tabbar from './cinemaComponent2/Tabbar'
import Navbar from './cinemaComponent2/Navbar'

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
        <Navbar event={()=>{
            console.log("navbar")

            this.setState({
                current:2
            })
        }}></Navbar>
        {
            this.which()
        }
        <Tabbar event={(index)=>{
            console.log(index)

            this.setState({
                current:index
            })
        }} current={this.state.current} list={this.state.list}></Tabbar>
      </div>
    )
  }

  
}
