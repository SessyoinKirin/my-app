import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    state = {
        type: 1
    }

    render() {
        console.log("render")
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            type: 1
                        })
                    }}>Cinema</li>
                    <li onClick={() => {
                        this.setState({
                            type: 2
                        })
                    }}>Online</li>
                </ul>
                <FilmList type={this.state.type} />
            </div>
        )
    }
}

class FilmList extends Component {

    state = {
        list: []
    }

    componentDidMount() {
        console.log(this.props.type)
        if (this.props.type === 1) {
            console.log('cinema')
            axios({
                url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1533287",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16782095421138140563636225"}', 'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })
        } else {
            console.log('online')
            axios({
                url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=1370495",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16782095421138140563636225"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.type === 1) {
            console.log('Ccinema')
            axios({
                url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1533287",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16782095421138140563636225"}', 'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })
        } else {
            console.log('Oonline')
            axios({
                url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=1370495",
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16782095421138140563636225"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res.data.data.films)
                this.setState({
                    list: res.data.data.films
                })
            })
        }
    }

    render() {
        return <div>
            <ul>
                {
                    this.state.list.map(item =>
                        <li key={item.filmId}>{item.name}</li>
                    )
                }
            </ul>
        </div>
    }
}