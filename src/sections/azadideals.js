import React from 'react'
import products from '../data.json';
import banner from '../Media/azadi-deals.jpeg'
function azadideals() {
    const  azaddeal=products.filter(product=>product.category==='azadi deals')
  return (
    <div className='container' id='azadideals'>
      <img src={banner} alt="" width={'100%'} className='img-cat'/>
      <div className="row">
        {
            azaddeal.map(product=>(
                <div className='col-lg-4'>
                    <div className="bg-light h-card position-relative rounded-3 shadow-lg p-3 d-flex my-2 poppins">
                   <img src={require(`../${product.image}`)} width={130} alt="" />
                   <div className='card-body px-2'>
                    <p className='fw-semibold'>{product.name}</p>
                    <p className='text-secondary' style={{fontSize:'12px'}}>{product.description}</p>
                    <div className="d-flex pt-2 align-items-center position-absolute bottom-0 my-2 w-50  justify-content-between">
                    <p className='fw-semibold'>Rs.{product.price}</p>
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

export default azadideals
