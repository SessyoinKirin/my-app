import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('id'))
    return (
        <div>
            Detail
            <button onClick={()=>{
                setSearchParams({id:114514})
            }}>recomendação</button>
        </div>
    )
}
