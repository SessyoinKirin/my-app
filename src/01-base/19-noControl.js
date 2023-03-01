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
 * @Date: 2022-07-31 15:44:57
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-31 15:58:58
 * @FilePath: \my-app\src\01-base\19-noControl.js
 * @Description: 31 - controlado e não controlado em um forms
 * 
 */

import React, { Component } from 'react'

export default class App extends Component {
    username=React.createRef()
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" ref={this.username} defaultValue="username"/>
        <button onClick={()=>{
            console.log(this.username.current.value)
        }}>Entrar</button>
        <button onClick={()=>{
            this.username.current.value=""
        }}>Reescrever</button>

        {/* <Child/> */}
      </div>
    )
  }
}
