import React, { Component } from 'react'

export default class App extends Component {

    state = {
        myname: "natsu"
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "Gray"
                    })
                }}>click</button>
                {this.state.myname}
            </div>
        )
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (JSON.stringify(this.state) !== JSON.stringify(nextState)) {
            return true
        }

        return false
    }
    componentDidUpdate() {
        console.log("update")
    }
}
