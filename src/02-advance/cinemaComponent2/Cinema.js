/*
 * @Author: SessyoinChen
 * @Date: 2022-07-25 23:04:32
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-26 21:47:49
 * @FilePath: \my-app\src\01-base\cinemaComponent\Cinema.js
 * @Description: 21 - escolher card
 * 22 - uso de axios
 * 
 */

import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
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
      })
    
  }

  render(){

    return (
      <div>
        <input onInput={this.handleInput}/>
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
