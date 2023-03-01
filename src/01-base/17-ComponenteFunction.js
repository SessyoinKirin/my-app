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
 * @Date: 2022-07-29 20:25:55
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-29 20:42:26
 * @FilePath: \my-app\src\01-base\17-ComponenteFunction.js
 * @Description: 29 - atenção em propriedade
 * 
 */

import React, { Component } from 'react'
import Navbar from './Navbar/index'
import Sidebar from './Sidebar'
export default class App extends Component {
    
  render() {
    return (
      <div>
        <Navbar title="Navegador"></Navbar>

        <Sidebar bg="yellow" position="right"></Sidebar>
      </div>
    )
  }
}
