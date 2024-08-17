import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

const CartCard = ({image,title,quantity,price}) => {
    // let [grandtotal,setgrandtotal] = useState(0)
  return (
    <>
    <div style={{padding:"0px 5px",height:"auto",width:"100%",border:"1px solid black",display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"10px"}}>

        <div ><img style={{width:"80px",height:"auto",marginRight:"10px"}} src={image} alt="" /></div>
        <div >
            <p><b>{title}</b></p>
            <p>Quantity : {quantity}</p>
            <p>Total : {price}$  </p>
        </div>  
    </div>
    </>
  )
}

export default CartCard
