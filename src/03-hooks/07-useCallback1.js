import React from 'react'
import { useState } from 'react'

export default function App() {

    const[count, setcount] = useState(0)
    console.log('render')
  return (
    <div>
        <button onClick={()=>{
            setcount(count+1)
        }}>click</button>
      {count}
    </div>
  )
}
