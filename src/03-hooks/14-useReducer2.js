import React from 'react'
import { useContext } from 'react'
import { useReducer } from 'react'

const initialState = {
  a: '111',
  b: '1111',
}
const reducer = (prevState, action) => {
  let newstate = {...prevState}
  switch (action.type) {
    case "change-a":
      newstate.a = action.value
      return newstate
    case "change-b":
      newstate.b = action.value
      return newstate
    default:
      return prevState
  }
  return prevState
}

const GlobalContext = React.createContext()

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
    }}>
      <div>
        <Child1 />
        <Child2 />
        <Child3 />
      </div>
    </GlobalContext.Provider>
  )
}

function Child1() {
  const {dispatch} = useContext(GlobalContext)
  return <div style={{ background: 'red' }}>
    <button onClick={()=>{
      dispatch({
        type:"change-a",
        value:"222"
      })
    }}>troca A</button>
    <button onClick={()=>{
      dispatch({
        type:"change-b",
        value:"das abyssal ritter"
      })
    }}>troca B</button>
  </div>
}
function Child2() {
  const {state} = useContext(GlobalContext)
  return <div style={{ background: 'yellow' }}>
    child2 - {state.a}
  </div>
}
function Child3() {
  const {state} = useContext(GlobalContext)
  return <div style={{ background: 'gray' }}>
    child3 - {state.b}
  </div>
}