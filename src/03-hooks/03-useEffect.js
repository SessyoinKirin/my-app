import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'

export default function App() {
    const [list, setList] = useState([])



    useEffect(() => {
        axios.get("/test.json").then(res => {
            console.log(res.data)
            setList(res.data.data.films)
        })
    }, [])

    return (
        <div>
            app
            {
                list.map(item => <li key={item.filmId}>{item.name}</li>)
            }
        </div>
    )
}
