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
 * @LastEditTime: 2023-03-20 14:25:45
 * @FilePath: \my-app\src\03-hooks\12-useContext.js
 * @Description: https://www.bilibili.com/video/BV1dP4y1c7qd?p=41&spm_id_from=pageDriver&vd_source=836fdc694e557e7ae17e2acd7a4c61bd
 * 
 */


import React, { Component } from 'react'
import axios from 'axios'
import './css/index.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'

const GlobalContext = React.createContext()


export default function App(){
    const[filmlist, setfilmlist] = useState([])
    const[info, setinfo] = useState("")

    useEffect(()=>{
        axios.get(`/test.json`).then(res => {
            console.log(res.data.data.films)
            
            setfilmlist(res.data.data.films)
        })
    },[])

    return (
        <GlobalContext.Provider value={{
            call: "ligacao",
            sms: "messagem",
            info: info,
            changeInfo: (value) => {
                setinfo(value)
            }
        }}>
            <div>
                {/* {this.state.info} */}
                {
                    filmlist.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)

                }
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}



function FilmItem(props){
    let { name, poster, grade, synopsis, nation } = props

    const value = useContext(GlobalContext)
    console.log(value, "filmitem")
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



function FilmDetail(){
    const value = useContext(GlobalContext)
    return (
        <div className='filmdetail'>detail - {value.info}</div>
    )
}


