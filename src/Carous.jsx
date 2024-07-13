import React from 'react'
import slide1 from './images1/a_slide.jpg'
import slide2 from './assets/asse1.jpg'
import slide3 from './images1/slide2.jpg'
// import slide4 from './images1/slide3.jpg'
 


function Carous() {
  return (
    <div>
      <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={slide1} class="d-block w-100 " alt="first slide" style={{height:'320px'}}/>
    </div>
    <div class="carousel-item">
      <img src={slide2} class="d-block w-100" alt="second slide" style={{height:'320px'}}/>
    </div>
    <div class="carousel-item">
      <img src={slide3} class="d-block w-100" alt="therd slide" style={{height:'320px'}}/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Carous