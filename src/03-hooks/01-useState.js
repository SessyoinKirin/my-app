import React from 'react'
import { useState } from 'react'

export default function App() {

    const[name, setName] = useState("Zero")
    const[age, setAge] = useState(100)
    return (
        <div>
            <button onClick={()=>{
                setName("Natsu")
                setAge(29)
            }}>btn</button>
            app - {name} - {age}
        </div>
    )
}
