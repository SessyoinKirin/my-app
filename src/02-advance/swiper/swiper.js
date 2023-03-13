import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'
Swiper.use([Navigation, Pagination])

export default class KSwiper extends Component {

    componentDidMount() {
        new Swiper(".swiper", {
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }

    render() {
        console.log('renderSwiper')
        return (
            <div>

                <div className="swiper" style={{ height: "200px", background: "yellow" }}>

                    <div className="swiper-wrapper">

                        {this.props.children}

                    </div>

                    <div className="swiper-pagination"></div>

                    {/* <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>

          <div className="swiper-scrollbar"></div> */}
                </div>
            </div>
        )
    }
}
