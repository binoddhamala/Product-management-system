
import { useParams } from 'react-router-dom'
import Navbar from '../Home/Components/Navbar/Navbar'
import'./EditProduct.css'
import axios from 'axios'
import { useEffect, useState } from 'react'

const EditProduct = () => {
    const {id}= useParams()
    const [product,setProduct]=useState({})
    
    //for edit 
    const handleChange= async (e)=>{
        const {name,value}=e.target
        setProduct({
            ...product,
            [name] :value
        })

    }

    //fetching product of id
    const fetchProduct=async()=>{
        const response=await axios.get("https://6582de5c02f747c8367a6e08.mockapi.io/products/" + id)
        setProduct(response.data)
    }
    useEffect(()=>{
        fetchProduct()
    },[])

  return (
    
  <>
    <Navbar />
    <div className="form">
  <h1>Edit Product</h1>
 <form>
    <label htmlFor="productImage">Product Image:</label>
    <input  value={product.productImage} type="text" id="productImage" name="productImage" accept="text/*" onChange={handleChange} />

    <label htmlFor="productName">Product Name:</label>
    <input value={product.productName} type="text" id="productName" name="productName" required onChange={handleChange} />

    <label htmlFor="productDescription">Product Description:</label>
    <textarea value={product.productDescription} id="productDescription" name="productDescription" rows="4" required onChange={handleChange} ></textarea> 

    <label htmlFor="productMaterials">Product Materials:</label>
    <input  value={product.productMaterial} type="text" id="productMaterial" name="productMaterial" required onChange={handleChange} />
    <button type="submit">Update</button>
 </form>
</div>

</>
  )
}

export default EditProduct