import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../01-base/css/01-index.css'
import { useCallback } from 'react'

export default function App() {

    const [text, setText] = useState("")
    const [list, setList] = useState(["aa", "bb", "cc"])
    const[myname, setmyname] = useState("zero")

    const handleChange = useCallback(
        (evt) => {
            setText(evt.target.value)
        }, []
    )
    const handleAdd = useCallback(
        () => {
            setList([text, ...list])
            setText("")
        }, [text, list]
    )

    const handleDel = useCallback(
        (index) => {
            var newList = [...list]
            newList.splice(index, 1)
            setList(newList)
        }, [list]
    )



    return (
        <div>
{/* Evite que a função seja recriada quando o componente é renderizado novamente e atue como um cache. Somente quando o segundo parâmetro for alterado, ela será declarado novamente */}
            {myname} - <button onClick={()=>{
                setmyname(myname.substring(0,1).toUpperCase()+myname.substring(1))
            }}>clicl</button>
            <input onChange={handleChange} value={text} />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                    list.map((item, index) =>
                        <li key={item}>{item}
                            <button onClick={() => handleDel(index)}>
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
