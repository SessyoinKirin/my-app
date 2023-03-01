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
 * @Date: 2022-07-27 20:21:39
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-27 20:38:36
 * @FilePath: \my-app\src\01-base\13-setStateSincroAssincro.js
 * @Description: 24 - estados
 * 
 */

import React, { Component } from 'react'

export default class App extends Component {
    state ={
        count:1
    }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.handleAdd1}>add1</button>
        <button onClick={this.handleAdd2}>add2</button>
      </div>
    )
  }

  handleAdd1=()=>{
    this.setState({
        count:this.state.count+1
    }, ()=>{
        console.log(this.state.count)
    })

    this.setState({
        count:this.state.count+1
    }, ()=>{
        console.log(this.state.count)
    })

    this.setState({
        count:this.state.count+1
    }, ()=>{
        console.log(this.state.count)
    })

    // nesse caso setState é Assincrona
  }

  handleAdd2=()=>{
    setTimeout(()=>{
        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)

        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)

        this.setState({
            count:this.state.count+1
        })
        console.log(this.state.count)

    },0)
  }
}
