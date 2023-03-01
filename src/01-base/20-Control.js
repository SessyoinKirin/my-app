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
 * @Date: 2022-07-31 15:59:08
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-31 16:17:32
 * @FilePath: \my-app\src\01-base\20-Control.js
 * @Description: 31 
 * 
 */

import React, { Component } from 'react'

class Child extends Component{
    render(){
        return(
            <div>
                Child-{this.props.username}
            </div>
        )
    }
}

export default class App extends Component {
   state={
    username:"joseph"
   }
  render() {
    return (
      <div>
        <h1>Login</h1>
        <input type="text" value={this.state.username} onChange={(event)=>{
            // console.log('onChange',event.target.value)

            this.setState({
                username:event.target.value
            })
        }}/>
        <button onClick={()=>{
            console.log(this.state.username)
        }}>Entrar</button>
        <button onClick={()=>{
           this.setState({
            username:""
           })
        }}>Reescrever</button>

        <Child username={this.state.username}/>
      </div>
    )
  }
}
