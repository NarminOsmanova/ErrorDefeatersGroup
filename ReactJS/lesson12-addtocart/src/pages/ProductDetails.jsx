import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { ProductContext } from '../context/ProductContext';

const ProductDetails = () => {
    const [products,setProduct] = useContext(ProductContext)
    const {url} = useParams();
    const productdetails = products.find(p=>p.id ==url)
  return (
<div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={productdetails.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">{productdetails.title}</h1>
     <p>Price:${productdetails.price}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <Link to="/shop" className="btn btn-primary btn-lg px-4 me-md-2">Back</Link>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductDetails