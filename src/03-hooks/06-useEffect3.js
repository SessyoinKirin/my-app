import React, { Component } from 'react'
import { useLayoutEffect } from 'react'
import { useEffect } from 'react'

export default class App extends Component {
    state = {
        isCreated: false
    }
    render() {
        console.log('render')
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isCreated: !this.state.isCreated
                    })
                }}>
                    btn
                </button>
                {/* {this.state.isCreated?<Child/>:""} */}
                {this.state.isCreated && <Child />}
            </div>
        )
    }
}

function Child() {
    useEffect(() => {
        window.onresize = () => {
            console.log('resize')
        }

        var timer = setInterval(() => {
            console.log('222')
        }, 1000)

        return ()=>{
            console.log("descrucao")
            window.onresize = null
            clearInterval(timer)
        }
    }, [])
    return <div>
            child
        </div>
}

// useLayoutEffect trabalha no dom, que as vezes pode atrapalhar a renderização da página, diferente de useEffect que trabalha pós renderização da página 

// mas, quando queira fazer operação de dom em CDM, didUpdate, seria melhor LayoutEffect

// class Child extends Component {
//     render() {
//         return <div>
//             Child
//         </div>
//     }

//     componentDidMount() {
//         window.onresize = () => {
//             console.log('resize')
//         }

//         this.timer = setInterval(() => {
//             console.log('222')
//         }, 1000)
//     }

//     componentWillUnmount() {
//         console.log('unmount')
//         window.onresize = null
//         clearInterval(this.timer)
//     }
// }