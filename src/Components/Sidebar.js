import React from 'react'
import hamburger from '../Media/burger-menu-left-svgrepo-com.svg'
function Sidebar() {
  return (
    <>
    <div>
    

<div className="offcanvas offcanvas-start poppins" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div className="offcanvas-header">
    <div className="offcanvas-title fs-5 fw-semibold" id="offcanvasWithBothOptionsLabel"><img src={hamburger} width={'30px'} alt="" />  Categories</div>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div className='menu'>
    <a href="#newarrivals">new arrivals</a>
    <a href="#azadideals">azadi deals</a>
    <a href="#exclusivedeals">online exclusive deals</a>
    <a href="#combos">combos</a>
    </div>
  </div>
</div>
</div>
</>
  )
}

export default Sidebar
