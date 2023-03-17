/*

 * @Author: SessyoinChen
 * @Date: 2022-07-31 21:36:39
 * @LastEditors: SessyoinChen
 * @LastEditTime: 2023-03-17 10:01:43
 * @FilePath: \my-app\src\03-hooks\09-useMemo.js
 * @Description: 32 - componente controlado em cinema
 * 
 */

import React, { Component } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { useMemo } from 'react'


export default function Cinema() {
    const [mytext, setmytext] = useState("")
    const [cinemaList, setcinemaList] = useState([])

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
            method: "get",
            headers: {
                'X-Client-Info': '{"a":"3000", "ch":"1002", "v":"5.0.4", "e":"16395416565231270166529", "bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then(res => {

            setcinemaList(res.data.data.cinemas)
        })
    }, [])
// useMemo consegue  pegar o retorno de function e deixa salva como caches, reutilizando até o segundo parâmetro é alterado
    const getCinemaList = useMemo(() => 
        cinemaList.filter(item => item.name.toUpperCase().includes(mytext.toUpperCase()) || item.address.toUpperCase().includes(mytext.toUpperCase()))
    , [cinemaList, mytext])
    return <div>
        <input value={mytext} onChange={(evt) => {
            setmytext(evt.target.value)
        }} />
        {
            getCinemaList.map(item => <dl key={item.cinemaId}>
                <dt>
                    {item.name}
                </dt>
                <dd>
                    {item.address}
                </dd>
            </dl>)
        }

    </div>

}

