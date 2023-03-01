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
 * @Date: 2022-07-30 21:35:47
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-31 15:37:19
 * @FilePath: \my-app\src\01-base\18-estadoVScomponente.js
 * @Description: 30 - diferença de state e component
 * 
 */

import React, { Component } from 'react'

class Child extends Component{
  
  render(){
    return(
      <div>
        Child-{this.props.text}

        <button onClick={()=>{
          this.props.text= "19194"
        }}>click-filho</button>
      </div>
    )
  }
}

export default class App extends Component {
  state={
    text:"114514"
  }
  render() {
    return (
      <div>
        <button onClick={()=>{
          this.setState({
            text:"8101919"
          })
        }}>click-pai</button>
        <Child text={this.state.text} />
      </div>
    )
  }
}
