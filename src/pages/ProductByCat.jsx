import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import axios from 'axios'
import ProductCard from '../components/Card'
import { Container, Spinner } from 'react-bootstrap'
import Footer from '../components/Footer'

const ProductByCat = () => {
    let {category} = useParams()
 console.log(category);
    let [products,setProducts]=useState([])
    let [loading,setloading] = useState(false)

let fetchProducts = async () =>{
    setloading(true)
try {
    let res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
setProducts(res.data)
} catch (error) {
    console.log(error);
}finally{
    setloading(false)
}

}

useEffect(()=>{
    fetchProducts()
},[category])
    
  return (
    <>
    
    <Container>
        <h3 className='text-center mb-3'>{category}</h3>
    <div style={{gap:"20px"}} className='d-flex flex-wrap justify-content-around align-items-center ' >
     {
       loading ? <Spinner className='mt-3' animation="border" variant="dark" /> :  products.map((v,i)=>{
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

export default ProductByCat
