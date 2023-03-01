/*
 *                                |~~~~~~~|
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *                                |       |
 *     |~.\\\_\~~~~~~~~~~~~~~xx~~~         ~~~~~~~~~~~~~~~~~~~~~/_//;~|
 *     |  \  o \_         ,XXXXX),                         _..-~ o /  |
 *     |    ~~\  ~-.     XXXXX`)))),                 _.--~~   .-~~~   |
 *      ~~~~~~~`\   ~\~~~XXX' _/ ';))     |~~~~~~..-~     _.-~ ~~~~~~~
 *               `\   ~~--`_\~\, ;;;\)__.---.~~~      _.-~
 *                 ~-.       `:;;/;; \          _..-~~
 *                    ~-._      `''        /-~-~
 *                        `\              /  /
 *                          |         ,   | |
 *                           |  '        /  |
 *                            \/;          |
 *                             ;;          |
 *                             `;   .       |
 *                             |~~~-----.....|
 *                            | \             \
 *                           | /\~~--...__    |
 *                           (|  `\       __-\|
 *                           ||    \_   /~    |
 *                           |)     \~-'      |
 *                            |      | \      '
 *                            |      |  \    :
 *                             \     |  |    |
 *                              |    )  (    )
 *                               \  /;  /\  |
 *                               |    |/   |
 *                               |    |   |
 *                                \  .'  ||
 *                                |  |  | |
 *                                (  | |  |
 *                                |   \ \ |
 *                                || o `.)|
 *                                |`\\) |
 *                                |       |
 *                                |       |
 * 
 * @Author: SessyoinChen
 * @Date: 2022-07-31 21:36:39
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-31 21:46:18
 * @FilePath: \my-app\src\01-base\21-cinemaControl.js
 * @Description: 32 - componente controlado em cinema
 * 
 */

import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {
  constructor(){
    super()
    this.state = {
      cinemaList:[],
      text:""
    //   backupCinemalist:[]
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
        cinemaList: res.data.data.cinemas
        // backupCinemalist: res.data.data.cinemas
      })
      })
    
  }

  render(){

    return (
      <div>
        <input value={this.state.text} onChange={(event)=>{
            this.setState({
                text:event.target.value
            })
        }}/>
          {
            this.getCinemaList().map(item=><dl key={item.cinemaId}>
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

  getCinemaList(){
    return this.state.cinemaList.filter(item=>item.name.toUpperCase().includes(this.state.text.toUpperCase()) || item.address.toUpperCase().includes(this.state.text.toUpperCase()))
  }

//   handleInput=(event)=>{
//     console.log(event.target.value)
    // var newlist= this.state.backupCinemalist.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase()) || item.address.toUpperCase().includes(event.target.value.toUpperCase()))
//     this.setState({
//       cinemaList:newlist
//     })
//   }
}
