import React, { Component } from 'react'

export default class App extends Component {

state={
    myname:"zero"
}

    UNSAFE_componentWillMount() {
        console.log('willMount', this.state.myname, document.getElementById("myname"))

        this.setState({
            myname:"zero"
        })

        //inicialização de dados
    }
    componentDidMount() {

        // requisita de dados de axios
        // subscribe funções
        // setinterval
        // inicializa dom
        console.log('didmount')
    }

    render() {
        console.log('render')
        return (
            <div>
                <span id="myname">{this.state.myname}</span>
            </div>
        )
    }
}
