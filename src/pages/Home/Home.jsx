
import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from './Components/Navbar/Navbar'
import axios from 'axios'

const Home = () => {
  const [products,setProducts ] = useState([])
  const fetchProducts = async ()=>{
    const response = await axios.get("https://6582de5c02f747c8367a6e08.mockapi.io/products")
    setProducts(response.data)
  }
  useEffect(()=>{
    fetchProducts()
  },[])
  return (
<>
    <Navbar/>
    <div className="card-container">
    {
            products.map((product)=>{
              return(
        <div key={product.id} className="card">
           <img src={product.productImage} alt="Product Image"/>
           <h2 className="product-name">{product.productName}</h2>
           <p className="product-description">{product.productDescription}</p>
           <p>{product.productMaterial}</p>
        </div>
              )
      })
    }
    </div>
</>
  )
}

export default Home