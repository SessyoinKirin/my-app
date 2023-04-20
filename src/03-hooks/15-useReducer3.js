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
 * @LastEditTime: 2023-04-20 10:13:23
 * @FilePath: \my-app\src\03-hooks\15-useReducer3.js
 * @Description: https://www.bilibili.com/video/BV1dP4y1c7qd?p=41&spm_id_from=pageDriver&vd_source=836fdc694e557e7ae17e2acd7a4c61bd
 * 
 */


import React, { Component } from 'react'
import axios from 'axios'
import './css/index.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'

const GlobalContext = React.createContext()

const initialState = {
    info: "",
    filmlist: []
}

const reducer = (prevState, action) => {
    let newState = { ...prevState }

    switch (action.type) {
        case "change-filmlist":
            newState.filmlist = action.value
            return newState
        case "change-info":
            newState.info = action.value
            return newState
        default:
            return prevState
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        axios.get(`/test.json`).then(res => {
            dispatch({
                type: "change-filmlist",
                value: res.data.data.films
            })
        })
    }, [])

    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                {/* {this.state.info} */}
                {
                    state.filmlist.map(item => <FilmItem key={item.filmId} {...item}></FilmItem>)

                }
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )
}



function FilmItem(props) {
    let { name, poster, grade, synopsis, nation } = props

    const { dispatch } = useContext(GlobalContext)
    return (
        <div className='filmitem' onClick={() => {
            dispatch({
                type: "change-info",
                value: synopsis
            })
        }}>
            <img src={poster} alt={name} />
            <h4>{name}</h4>
            <div>Nota: {grade}</div>
            <div>Nação: {nation}</div>
        </div>
    )
}



function FilmDetail() {
    const {state} = useContext(GlobalContext)
    return (
        <div className='filmdetail'>detail - {state.info}</div>
    )
}


