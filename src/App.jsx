
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddProduct from './pages/AddProduct/AddProduct'
import SingleProduct from './pages/AddProduct/SingleProduct/SingleProduct'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/addProduct' element={<AddProduct />} />
      <Route path='/singleProduct' element={<SingleProduct />} />


    </Routes>
    </BrowserRouter>
  )
}

export default App