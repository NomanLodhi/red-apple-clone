import React from 'react'
import creditVisa from '../Media/visa.png';
import apple from '../Media/pngegg.png';
import google from '../Media/pngwing.com.png'
import card from '../Media/money.png'
function footer() {
  return (
<footer className='container-fluid bg-footer mt-5'>
    <div className="container pt-3 poppins">
<div className="row">
    <div className="col-lg-8">
    <h4 className='fw-bold'>Redapple</h4>
<div className='d-flex text-secondary my-2 flex-wrap'>
    <a className='mx-3 text-decoration-none text-secondary fw-semibold my-2'>Delivery Hours</a>
    <a className='mx-3 text-decoration-none text-secondary fw-semibold my-2'>Delivery Locations</a>
    <a className='mx-3 text-decoration-none text-secondary fw-semibold my-2'>Store Timings</a>
    <a className='mx-3 text-decoration-none text-secondary fw-semibold my-2'>About us</a>
    <a className='mx-3 text-decoration-none text-secondary fw-semibold my-2'>My Profile</a>
    </div>
    <div className="row mt-3">
        <div className="col-lg-6">
            <h6>Contact Us</h6>
            <div className="d-flex my-3">
            <button className="btn btn-light shadow-lg rounded-pill mx-2 d-small-none"><i class="fa-brands fa-whatsapp text-danger mx-2"></i><span className="poppins">Chat</span></button>
            <button className="btn btn-light shadow-lg rounded-pill mx-2 d-small-none"><i class="fa-solid fa-phone text-danger mx-2"></i><span className="poppins " sty>021-111-222-333</span></button>
            </div>
        </div>
        <div className="col-lg-6">
            <h6>Contact Us</h6>
            <p className="fw-bold" style={{fontSize:'12px'}}>FLAT NO. 8, PLOT NO. D-12, AL-JAFFER APPARTMENTS, BLOCK-05, KEHKASHAN</p>
        </div>
    </div>
    </div>
    
    <div className="col-lg-4">
    <h6>Download the app</h6>
            <div className="d-flex align-items-center">
          <img src={apple} alt="" width={150} />
          <img src={google} alt="" width={150} />
            </div>
    <h6>Accepted Payments</h6>
            <div className="d-flex align-items-center">
          <img src={card} alt="" width={50} />
          <img src={creditVisa} alt="" width={50} />
            </div>
    </div>
</div>
<div className="container my-2" style={{borderTop:'1px solid gray',borderBottom:'1px solid gray'}}>
        <div className="d-flex justify-content-between py-1 flex-wrap">
        <div className='d-flex text-secondary'>
    <a className='mx-3 text-decoration-none text-secondary my-2'><i className='fa-brands fa-whatsapp fs-5'></i></a>
    <a className='mx-3 text-decoration-none text-secondary my-2'><i className='fa-brands fa-facebook fs-5'></i></a>
    </div>
        <div className='d-flex text-secondary'>
    <a className='mx-2 text-decoration-none text-secondary my-2' style={{fontSize:'11px'}}>Terms of Services</a>
    <a className='mx-2 text-decoration-none text-secondary my-2' style={{fontSize:'11px'}}>Privacy Policy</a>
    <a className='mx-2 text-decoration-none text-secondary my-2' style={{fontSize:'11px'}}>Returns & Refunds</a>
    </div>
   
        </div>
    </div>
<div className="container my-2">
        <div className="d-flex justify-content-between py-1 flex-wrap">
       <p className="text-secondary fw-semibold" >
        2024-redapple by NOMAN LODHI. All Rights Reserved
       </p>
       <p className="text-secondary fw-semibold" >
    Shop powered by <a className='text-warning pacifico' href='https://nomanlodhi.github.io/my-portfolio/' target='_main'>Noman Lodhi</a>
       </p>
       
   
        </div>
    </div>
    </div>
</footer>
  )
}

export default footer
