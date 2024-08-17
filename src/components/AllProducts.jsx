import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from './Card'
import { Container, Spinner } from 'react-bootstrap'
import Footer from './Footer'



const AllProducts = () => {
  let [loading,setloading] = useState(false)
let [products,setProducts]=useState([])
let fetchProducts = async () =>{
  setloading(true)
try {
  let res = await axios.get("https://fakestoreapi.com/products")
setProducts(res.data)
} catch (error) {
  console.log(error);
}finally{
  setloading(false)
}
}

useEffect(()=>{
    fetchProducts()
},[])
  return (
    <>
    <Container>
    <h3 className='text-center mb-3'>All Products</h3>
    <div style={{gap:"20px"}} className='d-flex flex-wrap justify-content-around align-items-center ' >
     {
        loading ? <Spinner className='mt-3' animation="border" variant="dark" /> : products.map((v,i)=>{
          return <ProductCard key={i} image = {v.image}
          title = {v.title}
          desc = {v.description}
          price = {v.price}
          id={v.id} />
      })
     }
    </div>
    </Container>
    {
        loading ? "" : <Footer/>
    }
    </>
  )
}

export default AllProducts
