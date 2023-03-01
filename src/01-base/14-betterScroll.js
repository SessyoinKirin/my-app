/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 * 
 * @Author: SessyoinChen
 * @Date: 2022-07-27 20:45:59
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-27 21:06:57
 * @FilePath: \my-app\src\01-base\14-betterScroll.js
 * @Description: 25 - estado II
 * 
 */

import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state={
        list:[]
    }
  render() {
    return (
      <div>
        <button onClick={()=>{
            this.getData()
        }}>click</button>
        <div className='wrapper' style={{height:'200px', background:'gray', overflow:'hidden'}}>
            <ul className='content'>
                {
                    this.state.list.map(item=><li key={item}>
                        {item}
                    </li>)
                }
            </ul>
        </div>
      </div>
    )
  }

  getData(){
    var list =[1,2,3,4,5,6,7,8,9,0,11,12,13,14,15]

    // this.setState({
    //     list:list
    // },()=>{
    //     new BetterScroll('.wrapper')
    // })

    setTimeout(()=>{
        this.setState({
            list: list
        })

        new BetterScroll('.wrapper')
    },0)
  }
}
