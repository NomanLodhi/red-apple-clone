import React, { useEffect, useState } from 'react';

import logo1 from '../Media/logo-1.png';
import logo from '../Media/logo.png';

function Navbar(props) {
const[timings,setTimings]=useState('set')
useEffect(()=>{
  let times=new Date();
  let hours=times.getHours();
  if(hours>8){
    setTimings('Closed')
  }
  else{
    setTimings('Open')
  }

},[])
   
  

  return (
   <>
   <marquee className="bg-danger text-light py-1 poppins"><p style={{fontSize:'14px'}} className='m-0 p-0'>Due to rainy season, the estimated delivery time for website orders is 60 minutes!</p></marquee>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <div className="d-flex justify-content-between">
       <div className="d-flex align-items-center">
       <img src={logo1} alt="logo-apple" width={70} />
      <a className="navbar-brand m-1 " href="#">
        <img src={logo} alt="logo" width={200} />
        <p style={{fontSize:'14px'}} className='m-0 poppins'><span className="text-success">{timings}</span> 10:45 am - 8:00 pm</p>
      </a>
       </div>
      <div className="d-flex align-items-center d-small-none">
      <div class="btn-group poppins">
<a href="#" class="btn btn-danger " aria-current="page">DELIVERY</a>
  <a href="#" class="btn btn-light">PICKUP</a>
</div>
  <span className='text-secondary'><i class="bi bi-geo-alt-fill"></i> <span className="poppins">select location</span></span>
      </div>
      </div>
<div className="d-flex py-1">
  <button className="btn btn-light shadow-lg rounded-pill mx-2 d-small-none"><i class="fa-solid fa-phone text-danger mx-2"></i><span className="poppins">021-111-222-333</span></button>
  <button className="btn btn-light shadow-lg rounded-pill mx-2"><i class="fa-brands fa-whatsapp text-danger mx-2 fs-5"></i></button>
  <button className="btn btn-light shadow-lg rounded-pill mx-2"><i class="fa-solid fa-house text-danger mx-2 fs-5"></i></button>
  <button className="btn btn-danger shadow-lg mx-2"><i class="fa-solid fa-cart-shopping mx-2 "></i><span className='poppins'>Cart</span></button>
</div>

  
      
     
      
    </div>
  </nav>
  </>
  )
}

export default Navbar
