import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Container, Spinner } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useMyContext } from '../context/CardContext'
import toast from 'react-hot-toast'

const ProductPreview = () => {
 
    let {id} = useParams()
    let {cartitems,setcartitems} = useMyContext()
    let[data,setData] = useState({})
    let[quantity,setquantity] = useState(1)
    let [loading,setloading] = useState(false)
    

    let fetchProductById = async () =>{
      setloading(true)
     try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`)
      setData(res.data);
      console.log(res);
     } catch (error) {
      console.log(error);
     }finally{
      setloading(false)
     }
    }

    let AddtoCart = () =>{
    let price = data.price * quantity
    setcartitems([...cartitems, { ...data, qty: quantity, total : price }])
    toast.success("Product Added to Cart !")
    }
    useEffect(()=>{
      fetchProductById()
    },[])
  return (
    < >
  {/* {JSON.stringify(data)} */}
  
      {
        loading ? <div style={{width:"100%",borderRadius:"20px"}} className='d-flex justify-content-center align-items-center'><Spinner className='mt-3' animation="border" variant="dark" /></div> : <div className='row ' >
        <div className='col-md-6 col-sm-12'><img  className='d-block m-auto mt-3' style={{width:"250px",height:"auto"}} src={data.image} /></div>
        <div  className='col-md-6 col-sm-12' >
            <p style={{marginLeft:"15px"}}>Category : {data.category}</p>
            <h4 style={{marginLeft:"15px"}}>{data.title}</h4>
            <div style={{width:"80%",textAlign:"justify"}}>
                <p style={{marginLeft:"15px"}}><b>Description :</b> <br /> {data.description}.</p>
            </div>
            <h5 style={{marginLeft:"15px"}}>Price : {data.price}$</h5>
            <h5 style={{marginLeft:"15px"}} className='mt-4'>
              <Button style={{fontSize:"15px"}} variant='dark' className='rounded'  onClick={()=>setquantity(quantity-1)} disabled = {quantity <= 1}>-</Button> {quantity} <Button style={{fontSize:"15px"}} variant='dark'  className='rounded'  onClick={()=>setquantity(quantity+1)}>+</Button>  </h5>
            <div style={{marginLeft:"15px"}} className='mt-4'><Button onClick={AddtoCart}   variant='dark' className='rounded'>Add to Cart </Button> </div>

           

        </div>
      </div>
      }
    </>
  )
}

export default ProductPreview
