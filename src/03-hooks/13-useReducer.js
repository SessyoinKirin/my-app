import React from 'react'
import { useReducer } from 'react'


const reducer = (prevState, action) => {
    // console.log('reducer ativado', prevState, action)
    let newstate = { ...prevState }
    switch (action.type) {
        case "zero-minus":
            newstate.count--;
            return newstate
        case "zero-add":
            newstate.count++;
            return newstate
        default:
            return prevState
    }
}

const initialState = {
    count: 0,

}
export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: "zero-minus"
                })
            }}>-</button>
            {
                state.count
            }
            <button onClick={() => {
                dispatch({
                    type: "zero-add"
                })
            }}>+</button>
        </div>
    )
}
