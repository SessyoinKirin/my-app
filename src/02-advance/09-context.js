/*
 * _______________#########_______________________ 
 * ______________############_____________________ 
 * ______________#############____________________ 
 * _____________##__###########___________________ 
 * ____________###__######_#####__________________ 
 * ____________###_#######___####_________________ 
 * ___________###__##########_####________________ 
 * __________####__###########_####_______________ 
 * ________#####___###########__#####_____________ 
 * _______######___###_########___#####___________ 
 * _______#####___###___########___######_________ 
 * ______######___###__###########___######_______ 
 * _____######___####_##############__######______ 
 * ____#######__#####################_#######_____ 
 * ____#######__##############################____ 
 * ___#######__######_#################_#######___ 
 * ___#######__######_######_#########___######___ 
 * ___#######____##__######___######_____######___ 
 * ___#######________######____#####_____#####____ 
 * ____######________#####_____#####_____####_____ 
 * _____#####________####______#####_____###______ 
 * ______#####______;###________###______#________ 
 * ________##_______####________####______________ 
 * 
 * @Author: SessyoinChen
 * @Date: 2023-03-01 11:16:15
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-01 15:12:15
 * @FilePath: \my-app\src\02-advance\09-context.js
 * @Description: 
 * 
 */


import React, { Component } from 'react'
import axios from 'axios'
import './css/03-communication.css'

const GlobalContext = React.createContext()

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            filmList: [],
            info: ""
        }
        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films)
            this.setState({
                filmList: res.data.data.films
            })
        })
    }

    render() {
        return (
            <GlobalContext.Provider value={{
                call: "ligacao",
                sms: "messagem",
                info: this.state.info,
                changeInfo: (value) => {
                    this.setState({
                        info: value
                    })
                }
            }}>
                <div>
                    {/* {this.state.info} */}
                    {
                        this.state.filmList.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)

                    }
                    <FilmDetail></FilmDetail>
                </div>
            </GlobalContext.Provider>
        )
    }
}

class FilmItem extends Component {
    render() {
        // console.log(this.props)
        let { name, poster, grade, synopsis, nation } = this.props
        return (
            <GlobalContext.Consumer>
                {
                    // objetivo é pegar o value para que possa usar dentro de consumer
                    (value) => {
                        console.log(value)

                        return (
                            <div className='filmitem' onClick={() => {
                                value.changeInfo(synopsis)
                            }}>
                                <img src={poster} alt={name} />
                                <h4>{name}</h4>
                                <div>Nota: {grade}</div>
                                <div>Nação: {nation}</div>
                            </div>
                        )
                    }
                }
            </GlobalContext.Consumer>
        )
    }
}

class FilmDetail extends Component {
    render() {
        return (
            <GlobalContext.Consumer>
                {
                    (value) => <div className='filmdetail'>detail - {value.info}</div>
                }
            </GlobalContext.Consumer>
        )
    }
}
