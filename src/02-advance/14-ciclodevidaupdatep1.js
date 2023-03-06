import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    state = {
        myname: "zero",
        list: []
    }

    componentDidMount() {
        axios.get("./test.json").then(res => {
            console.log(res.data.data.films)
            this.setState({
                list: res.data.data.list
            })
        })
    }
    render() {
        console.log("render")
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        myname: "orez"
                    })
                }}>btn</button>
                <span id="myname">{this.state.myname}</span>

                {/* <div id="wrapper">
                    <ul>
                         {
                            this.state.list.map(item=>
                            <li key={item.filmId}>
                                {item.name}
                            </li>)
                         }   
                    </ul>
                </div> */}
            </div>
        )
    }

    UNSAFE_componentWillUpdate() {
        console.log("will update", document.getElementById("myname").innerHTML)
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("did update", document.getElementById("myname").innerHTML)
        console.log(prevState.list)
    }
}
