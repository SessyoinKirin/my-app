/*
 *           佛曰:  
 *                   写字楼里写字间，写字间里程序员；  
 *                   程序人员写程序，又拿程序换酒钱。  
 *                   酒醒只在网上坐，酒醉还来网下眠；  
 *                   酒醉酒醒日复日，网上网下年复年。  
 *                   但愿老死电脑间，不愿鞠躬老板前；  
 *                   奔驰宝马贵者趣，公交自行程序员。  
 *                   别人笑我忒疯癫，我笑自己命太贱；  
 *                   不见满街漂亮妹，哪个归得程序员？
 * 
 * @Author: SessyoinChen
 * @Date: 2022-08-03 20:36:26
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-08-03 21:14:42
 * @FilePath: \my-app\src\02-advance\02-noControlCard.js
 * @Description: 35 - cards não controlados
 * 
 */

import React, { Component } from 'react'
import './css/02-vendaAssentos.css'
import Film from './cinemaComponent/Film'
import Cinema from './cinemaComponent/Cinema'
import Center from './cinemaComponent/Center'
import Tabbar from './cinemaComponent/Tabbar'
import Navbar from './cinemaComponent/Navbar'

export default class App extends Component {
    state = {
        current:1
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
        }}></Navbar>
        {
            this.which()
        }
        <Tabbar event={(index)=>{
            console.log(index)

            this.setState({
                current:index
            })
        }} defaultValue={this.state.current}></Tabbar>
      </div>
    )
  }

  
}
