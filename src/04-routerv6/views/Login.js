import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [text, setText] = useState()
  return (
    <div>
      <input type='text' value={text} onChange={(evt)=>{
        console.log(evt.target.value)
        setText(evt.target.value)
      }}/>
      <button onClick={()=>{
        localStorage.setItem('token',text)
        navigate('/center')
      }}>enter</button>
    </div>
  )
}
