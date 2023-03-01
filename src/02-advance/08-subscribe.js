/*
 * 
 *    ┏┓　　　┏┓
 *  ┏┛┻━━━┛┻┓
 *  ┃　　　　　　　┃
 *  ┃　　　━　　　┃
 *  ┃　＞　　　＜　┃
 *  ┃　　　　　　　┃
 *  ┃...　⌒　...　┃
 *  ┃　　　　　　　┃
 *  ┗━┓　　　┏━┛
 *      ┃　　　┃　
 *      ┃　　　┃
 *      ┃　　　┃
 *      ┃　　　┃  神兽保佑
 *      ┃　　　┃  代码无bug　　
 *      ┃　　　┃
 *      ┃　　　┗━━━┓
 *      ┃　　　　　　　┣┓
 *      ┃　　　　　　　┏┛
 *      ┗┓┓┏━┳┓┏┛
 *        ┃┫┫　┃┫┫
 *        ┗┻┛　┗┻┛
 * 
 * @Author: SessyoinChen
 * @Date: 2022-08-10 14:33:46
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-01 14:28:22
 * @FilePath: \my-app\src\02-advance\08-subscribe.js
 * @Description: 39 - componentes irmãos, não foi possivel acessar test.json
 * https://www.bilibili.com/video/BV1dP4y1c7qd?p=39&vd_source=836fdc694e557e7ae17e2acd7a4c61bd
 */

import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

var bus = {
    list:[],

    subscribe(callback){
        //console.log(callback)
        this.list.push(callback)
    },
    publish(text){
        // console.log(this.list)
        this.list.forEach(callback=>{
            callback && callback(text)
        })
    }
}


export default class App extends Component {

    constructor(){
        super()
        this.state={
            filmList:[]
        }
        axios.get(`/test.json`).then(res=>{
            console.log(res.data.data.films)
            this.setState({
                filmList:res.data.data.films
            })
        })
    }

    render() {
    return (
      <div>
        {/* {this.state.info} */}
        {
            this.state.filmList.map(item=><FilmItem key={item.filmId} {...item}></FilmItem>)

        }
        <FilmDetail></FilmDetail>
      </div>
    )
  }
}

class FilmItem extends Component{
    render(){
        console.log(this.props)
        let {name, poster, grade, synopsis, nation} = this.props
        return(
            <div className='filmitem' onClick={()=>{
                this.props.onEvent(synopsis)
            }}>
                <img src={poster} alt={name}/>
                <h4>{name}</h4>
                <div>Nota: {grade}</div>
                <div>Nação: {nation}</div>
            </div>
        )
    }
}

class FilmDetail extends Component{


    
    constructor(){
        super()
        bus.subscribe((info)=>{
            console.log('mostrando filmdetail', info)
        })
    }
    render(){
        return(
            <div>
                {this.props.info}
            </div>
        )
    }
}
