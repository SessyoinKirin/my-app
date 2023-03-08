/*
 * @Author: SessyoinChen
 * @Date: 2022-07-17 20:58:26
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-07 15:30:44
 * @FilePath: \my-app\src\index.js
 * @Description: 05 - linguagem JSX
 * 
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from './02-advance/19-ciclodevidaunmount'

ReactDom.render(
    // <React.StrictMode>
        <App/>
    // </React.StrictMode>
        ,document.getElementById("root")
)