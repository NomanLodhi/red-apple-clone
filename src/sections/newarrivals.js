import banner from '../Media/new-arrivals.jpeg'
import products from '../data.json'
function newarrivals() {

     const newarriv=products.filter(product=>product.category==='new arrivals')
    return (
        <>
    <div id='newarrivals' className='container'>
      <img src={banner} alt="" width={"100%"} className='img-cat'/>
    <div className="row py-1">
    {
        newarriv.map(product=>(
            <div className='col-lg-4'>
                <div className="card poppins my-2 shadow-lg">
                <img src={require(`../${product.image}`)} alt="" className='card-img-top'/>
               <div className="card-body">
                <p className='fw-bold'>{product.name}</p>
                <p className='text-secondary' style={{fontSize:'14px'}}>{product.description}</p>
                <div className="d-flex pt-2 align-items-center justify-content-between">
                    <p className='fs-5 fw-semibold'>Rs.{product.price}</p>
                    <button className='btn btn-danger rounded-circle  text-center'><i class="fa-solid fa-plus"></i></button>
                </div>
                </div>
               </div>
                </div>
        ))
    }
    </div>
    </div>
    </>
  )
}

export default newarrivals
