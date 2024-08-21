import React from 'react'
import Hamburger from '../Media/burger-list-menu-navigation-svgrepo-com.svg'

function Menu() {
  return (
    <div className='container-fluid bg-white shadow-lg py-2'>
      <div className="container">
      <div className="row">
        <div className="col-2 position-relative">
        <button className="btn-menu position-absolute end-0 me-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><img src={Hamburger} alt="" width={40}/></button>
   
        </div>
        <div className="col-10">
        <ul className="nav nav-pills poppins">
  
  <li className="nav-item">
    <a className="nav-link active" aria-current="page"  href="#newarrivals">new arrivals</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#azadideals" aria-current="page" >azadi deals</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href='#exclusivedeals' aria-current="page" >online exclusive deals</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href='#combos'aria-current="page" >combos</a>
  </li>
</ul>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Menu
