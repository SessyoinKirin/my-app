import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>
                Child
                {this.props.children[0]}
                {this.props.children[1]}
                {this.props.children[2]}
            </div>
        )
    }
}

class Swiper extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <Swiper>
                    <div>111</div>
                    <div>222</div>
                    <div>333</div>
                </Swiper>
                <Child>
                    <div>Excaribur</div>
                    <div>Enuma Elish</div>
                    <div>Enomothea</div>
                    {

                    }
                </Child>
            </div>
        )
    }
}


// bom é reutilização e diminuir a comunicação entre componentes pai e filhos