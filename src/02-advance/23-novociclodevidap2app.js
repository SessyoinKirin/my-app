import React, { Component } from 'react'
import './css/04-clear.css'

export default class App extends Component {
    state = {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
    myref = React.createRef()
    getSnapshotBeforeUpdate() {
        // receber a altura velho
        console.log(this.myref.current.scrollHeight)
        return this.myref.current.scrollHeight
        // return para value em didupdate
    }
    componentDidUpdate(prevProps, prevState, value){
        console.log(this.myref.current.scrollHeight)
        // a distancia é altura atual - altura velha
        // this.myref.current.scrollTop += this.myref.current.scrollHeight - value
        this.myref.current.scrollTop?(this.myref.current.scrollTop += this.myref.current.scrollHeight - value *2):(this.myref.current.scrollTop += this.myref.current.scrollHeight - value)
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        list: [...[11, 12, 13, 14, 15, 16, 17, 18, 19], ...this.state.list]
                    }),
                    alert('veio e-mail novo!')
                }}>Vir e-mail</button>
                <h1>E-mail</h1>
                <div style={{ height: "200px", overflow: "auto" }} ref={this.myref}>
                    <ul>
                        {
                            this.state.list.map(item =>
                                <li key={item} style={{ height: "100px", background: 'yellow' }}>{item}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}
