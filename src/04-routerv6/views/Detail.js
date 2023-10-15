import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detail() {
    const params = useParams()
    const navigate = useNavigate()
    console.log(params.myid)
  return (
    <div>
      detail
      <button onClick={()=>{
        navigate('/detail/1000')
      }}>talvez goste</button>
    </div>
  )
}
