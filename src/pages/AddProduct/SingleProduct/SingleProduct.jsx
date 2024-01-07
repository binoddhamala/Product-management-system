import Navbar from "../../Home/Components/Navbar/Navbar"
import './SingleProduct.css'


const SingleProduct = () => {
  return (
    <>
    <Navbar />
    <div className="card">
        <img  alt="Product Image" />
        <h2 className="product-name">Name Here</h2>
        <p className="product-description">Description  Here</p>
        <p>Materials Here</p>
    </div>
    </>
    
  )
}

export default SingleProduct