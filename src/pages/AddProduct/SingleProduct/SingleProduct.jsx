import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../Home/Components/Navbar/Navbar"
import './SingleProduct.css'
import axios from "axios"
import { useEffect, useState } from "react"


const SingleProduct = () => {
  const {id}= useParams()
  const navigate=useNavigate()
  //store coming data coming in object
  const [proudct,setProduct]=useState({})

  //delete product
  const deleteProduct=async()=>{
    const response= await axios.delete("https://6582de5c02f747c8367a6e08.mockapi.io/products/" + id)
      //navigate 
    if(response.status == 200){
      navigate("/")
    }else{
      alert('please try again')
    }
  
  }

  //fetch single product
  const fetchSingleProduct= async()=>{
  const response= await axios.get("https://6582de5c02f747c8367a6e08.mockapi.io/products/" + id)
  setProduct(response.data)
  }

useEffect(()=>{
  fetchSingleProduct()
},[])
  return (

    <>
    <Navbar />
    <div className="card1">
        <img src={proudct.productImage} alt="Product Image" />
        <h2 className="product-name">{proudct.productName}</h2>
        <p className="product-description">{proudct.productDescription}</p>
        <p>{proudct.productMaterial}</p><br/>
        <button className="delete-button" onClick={deleteProduct}>Delete</button>
        <button onClick={()=>navigate(`/editProduct/${proudct.id}`)}>Edit</button>
       
    </div>
    </>
    
  )
}

export default SingleProduct