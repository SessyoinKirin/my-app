import React from 'react'
import { useState, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../01-base/css/01-index.css'

export default function App() {


    const [list, setList] = useState(["aa", "bb", "cc"])
    const mytext = useRef() // React.createRef()



    const handleAdd = () => {
        // setList([text, ...list])
        // setText("")
        console.log(mytext.current.value)
        setList([...list, mytext.current.value])
        mytext.current.value = ""
    }

    const handleDel = (index) => {
        var newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }



    return (
        <div>
            <input ref={mytext} />
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
