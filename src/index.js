/*
 * @Author: SessyoinChen
 * @Date: 2022-07-17 20:58:26
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-20 10:31:48
 * @FilePath: \my-app\src\index.js
 * @Description: 05 - linguagem JSX
 * 
 */
import React from 'react'
import ReactDom from 'react-dom'
import App from './03-hooks/14-useReducer2'

ReactDom.render(
    // <React.StrictMode>
        <App/>
    // </React.StrictMode>
        ,document.getElementById("root")
)