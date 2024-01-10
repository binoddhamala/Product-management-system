
import { useState } from "react"
import Navbar from "../Home/Components/Navbar/Navbar"

import './AddProduct.css'
import axios from "axios"
import { useNavigate } from "react-router-dom"
const AddProduct = () => {
  const navigate = useNavigate()
  //  //first approach
  //  const [productImage,setProductImage] = useState("")
  //  const [productName,setProductName] = useState("")
  //  const [productDescription,setProductDescription] = useState("")
  //  const [productMaterial,setProductMaterial] = useState("")
  //  //console.log(productImage,productName,productDescription,productMaterial)
  //   const addProduct=async(e)=>{
  //     e.preventDefault()

  //   const response =  await axios.post("https://6582de5c02f747c8367a6e08.mockapi.io/products",{
  //       productImage : productImage,
  //       productMaterial:productMaterial,
  //       productDescription:productDescription,
  //       productName:productName
  //     })
  // console.log(response)
  //   }

  //second Appoach
  // const addProduct= async(e)=>{
  //   e.preventDefault()
  //   const formData = new FormData(e.currentTarget);
  //   const data = Object.fromEntries(formData)
  //   const response= await axios.post("https://6582de5c02f747c8367a6e08.mockapi.io/products",data)
  //   console.log(response)
  // }
 // Third apporach
 const [data,setData]= useState({
        productName:"",
        productDescription:"",
        productMaterial:"",
        productImage :""
 })
 const handleChange=(e)=>{
  const {name,value}=e.target
  setData({
    ...data,
    [name] :value
  })

 }
const addProduct =async(e)=>{
  e.preventDefault()
  const response= await axios.post("https://6582de5c02f747c8367a6e08.mockapi.io/products",data)
  if(response.status==201){
    navigate("/")
  }else{
    alert("something went wrong.please try again")
  }

}
  return (
     <>
    <Navbar />
<div className="form">
  <h1>Product Information</h1>
  <form onSubmit={addProduct}>
    {/* for second approach <label htmlFor="productImage">Product Image:</label>
    <input type="text" id="productImage" name="productImage" accept="text/*"  onChange={(e)=>setProductImage(e.target.value)}/>

    <label htmlFor="productName">Product Name:</label>
    <input type="text" id="productName" name="productName" required onChange={(e)=>setProductName(e.target.value)}  />

    <label htmlFor="productDescription">Product Description:</label>
    <textarea id="productDescription" name="productDescription" rows="4" required onChange={(e)=>setProductDescription(e.target.value)}></textarea> 

    <label htmlFor="productMaterials">Product Materials:</label>
    <input type="text" id="productMaterials" name="productMaterials" required onChange={(e)=>setProductMaterial(e.target.value)} /> */}
    {/* second approach<label htmlFor="productImage">Product Image:</label>
    <input type="text" id="productImage" name="productImage" accept="text/*"  />

    <label htmlFor="productName">Product Name:</label>
    <input type="text" id="productName" name="productName" required  />

    <label htmlFor="productDescription">Product Description:</label>
    <textarea id="productDescription" name="productDescription" rows="4" required ></textarea> 

    <label htmlFor="productMaterials">Product Materials:</label>
    <input type="text" id="productMaterials" name="productMaterials" required /> */}
    <label htmlFor="productImage">Product Image:</label>
    <input type="text" id="productImage" name="productImage" accept="text/*" onChange={handleChange} />

    <label htmlFor="productName">Product Name:</label>
    <input type="text" id="productName" name="productName" required onChange={handleChange} />

    <label htmlFor="productDescription">Product Description:</label>
    <textarea id="productDescription" name="productDescription" rows="4" required onChange={handleChange}></textarea> 

    <label htmlFor="productMaterial">Product Materials:</label>
    <input type="text" id="productMaterial" name="productMaterial" required onChange={handleChange}/>
    <button type="submit">Submit</button>
  </form>
</div>
    </>
  )
}

export default AddProduct
