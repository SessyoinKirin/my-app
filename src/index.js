/*
 * @Author: SessyoinChen
 * @Date: 2022-07-17 20:58:26
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-02 09:33:12
 * @FilePath: \my-app\src\index.js
 * @Description: 05 - linguagem JSX
 * 
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from './02-advance/10-slot'

ReactDom.render(
    // <React.StrictMode>
        <App/>
    // </React.StrictMode>
        ,document.getElementById("root")
)