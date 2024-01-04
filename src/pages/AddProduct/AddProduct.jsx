
import { useState } from "react"
import Navbar from "../Home/Components/Navbar/Navbar"

import './AddProduct.css'
const AddProduct = () => {
   //first approach
   const [productImage,setProductImage] = useState("")
   const [productName,seProductName] = useState("")
   const [productDescription,setProductDescription] = useState("")
   const [productMaterial,seProductMaterial] = useState("")


  return (
    <>
    <Navbar />
    <div className="form">
      <h1>Product Information</h1>
    <label htmlFor="productImage">Product Image:</label>
    <input type="text" id="productImage" name="productImage" accept="text/*" />

    <label htmlFor="productName">Product Name:</label>
    <input type="text" id="productName" name="productName" required />

    <label htmlFor="productDescription">Product Description:</label>
    <textarea id="productDescription" name="productDescription" rows="4" required></textarea>

    <label htmlFor="productMaterials">Product Materials:</label>
    <input type="text" id="productMaterials" name="productMaterials" required />

    <button type="submit">Submit</button>
    </div>
    </>
  )
}

export default AddProduct
