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
 * @Date: 2022-07-27 21:10:06
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-27 21:21:21
 * @FilePath: \my-app\src\01-base\15-betterScroll-cinema.js
 * @Description: 25 - estado II
 * 
 */

import React, { Component } from 'react'
import axios from 'axios'
import BetterScroll from 'better-scroll'
export default class App extends Component {
  constructor(){
    super()
    this.state = {
      cinemaList:[],
      backupCinemalist:[]
    }
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
      method:"get",
      headers:{
        'X-Client-Info': '{"a":"3000", "ch":"1002", "v":"5.0.4", "e":"16395416565231270166529", "bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      console.log(res.data.data.cinemas)

      this.setState({
        cinemaList: res.data.data.cinemas,
        backupCinemalist: res.data.data.cinemas
      })

      new BetterScroll('.wrapper')
    })
    
  }

  render(){

    return (
      <div>
        <input onInput={this.handleInput}/>
          <div className='wrapper' style={{height:'500px', background:'gray', overflow:'hidden'}}>
            <div className='content'>
                {
                this.state.cinemaList.map(item=><dl key={item.cinemaId}>
                <dt>
                    {item.name}
                </dt>
                <dd>
                    {item.address}
                </dd>
                </dl>)
            }
            </div>
          </div>
        
      </div>
    )
  }

  handleInput=(event)=>{
    console.log(event.target.value)
    var newlist= this.state.backupCinemalist.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))
    this.setState({
      cinemaList:newlist
    })
  }
}
