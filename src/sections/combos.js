import React from 'react'
import products from '../data.json'
import banner from '../Media/combos.jpeg'
function combos() {
    const filtercombo=products.filter(product=> product.category==='combos')
  return (
    <div className='container' id='combos'>
      <img src={banner} alt="" className='img-cat' width={'100%'} />
      <div className="row py-1">
{
    filtercombo.map(product=>(
        <div className='col-lg-4'>
             <div className="bg-light h-card rounded-3 shadow-lg p-3 position-relative d-flex my-2 poppins">
                   <img src={require(`../${product.image}`)} width={130} alt="" />
                   <div className='card-body px-2'>
                    <p className='fw-semibold'>{product.name}</p>
                    <p className='text-secondary' style={{fontSize:'12px'}}>{product.description}</p>
                    <div className="d-flex pt-2 align-items-center justify-content-between position-absolute bottom-0 w-50 my-1">
                    <div>
                    <p className="bg-danger text-light ps-3 my-1 position-relative sale-flash" style={{width:'100px'}}>{product.discount}% Off</p>
                    <p className='fw-semibold m-0'>Rs.{product.price}</p>
                    <p className='text-secondary' style={{fontSize:'12px'}}><del>{product.regularPrice}</del></p>
                    </div>
                    <button className='btn btn-danger rounded-circle  text-center'><i class="fa-solid fa-plus"></i></button>
                </div>
                   </div>
                    </div>
        </div>
    ))
}
      </div>
    </div>
  )
}

export default combos
