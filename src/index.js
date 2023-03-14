/*
 * @Author: SessyoinChen
 * @Date: 2022-07-17 20:58:26
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-14 10:33:34
 * @FilePath: \my-app\src\index.js
 * @Description: 05 - linguagem JSX
 * 
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from './03-hooks/05-useEffect2app'

ReactDom.render(
    // <React.StrictMode>
        <App/>
    // </React.StrictMode>
        ,document.getElementById("root")
)