import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export default function App() {
    const [name, setName] = useState("zero")

    useEffect(() => {
        setName(name.substring(0,1).toUpperCase()+name.substring(1))
    }, [name])
    return (
        <div>
            App-{name}
            <button onClick={()=>{
                setName("natsu")
            }}>click</button>
        </div>
    )
}
