import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"
import ProductByCat from "./pages/ProductByCat"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ProductPreview from "./pages/ProductPreview"
import CardContext from "./context/CardContext"
import { Toaster } from "react-hot-toast"


function App() {
  

  return (
    <BrowserRouter>
    <CardContext>
    <Header/>
    <Toaster position="top-center"/>
    <Routes>
     <Route element={<Home/>} path="/" />
     <Route element={<ProductByCat/>} path="/product/:category" />
     <Route element={<ProductPreview/>} path="/product-preview/:id" />
    </Routes>
   
    </CardContext>
    </BrowserRouter>
    
  
  )
}

export default App
