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
 * @Date: 2022-07-29 20:29:54
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2022-07-29 20:46:44
 * @FilePath: \my-app\src\01-base\Sidebar\index.js
 * @Description: 29 - atenção em propriedade
 * 
 */

import React from 'react'
import propTypes from 'prop-types'

export default function Sidebar(props) {
    let {bg, position} = props

    var obj1={
        left:0
    }

    var obj2={
        right:0
    }

    var obj={
        background:bg,
        wifth:"200px",
        position:"fixed",
    }
    var styleobj = position==="left"?{...obj,...obj1}:{...obj,...obj2}
  return (
    <div style={styleobj}>
        <ul>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
            <li>114514</li>
        </ul>
    </div>
  )
}

Sidebar.propTypes={
    bg:propTypes.string,
    position:propTypes.bool
}

Sidebar.defaultProps={
    bg:"blue",
    position:"left"
}