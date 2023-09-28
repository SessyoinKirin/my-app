import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from '../img/image1.jpg';
import image2 from '../img/image2.jpg';
import image3 from '../img/image3.jpg';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

export default function Film() {
  const imageStyle = {
    height: '50vh',
    objectFit: 'cover',
  };
  // cinemas
  // axios({
  //   url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
  //   method: "get",
  //   headers: {
  //     'X-Client-Info': '{"a":"3000", "ch":"1002", "v":"5.0.4", "e":"16395416565231270166529", "bc":"110100"}',
  //     'X-Host': 'mall.film-ticket.cinema.list'
  //   }
  // }).then(res => {
  //   console.log(res.data.data.cinemas)
  // })


  // films
  axios({
    url: "https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=1533287",
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16782095421138140563636225"}', 'X-Host': 'mall.film-ticket.film.list'
    }
  }).then(res => {
    console.log(res.data.data.films)
  })

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" style={imageStyle} alt="figura" />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" style={imageStyle} alt="figura" />
          </div>
          <div className="carousel-item">
            <img src={image3} className="d-block w-100" style={imageStyle} alt="figura" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Outlet></Outlet>
    </div>
  );
}
