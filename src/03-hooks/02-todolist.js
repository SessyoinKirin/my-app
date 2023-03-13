import React from 'react'
import { useState } from 'react'

export default function App() {

    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "cc"])

    const handleChange = (evt) => {
        // console.log("handle", evt.target.value)
        setText(evt.target.value)

    }

const handleAdd=()=>{
    setList([text, ...list])
    setText("")
}

const handleDel=(index)=>{
    var newList= [...list]
    newList.splice(index, 1)
    setList(newList)
}

    return (
        <div>
            <input onChange={handleChange} value={text}/>
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                    list.map((item, index)=>
                        <li key={item}>{item}
                        <button onClick={()=>handleDel(index)}>
                            Del
                        </button>
                        </li>
                        )
                }
            </ul>
            {!list.length && <div>Nada encontrado</div>}
        </div>
    )
}
