import React from 'react'
import Slide1 from '../Media/slide-1.jpeg'
import Slide2 from '../Media/slide-2.jpeg'
import Slide3 from '../Media/slide-3.jpeg'
function Carousal() {
  return (
    <div>
      <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Slide1} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slide2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Slide3} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carousal
