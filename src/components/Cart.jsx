import React, { useState } from 'react'
import { useMyContext } from '../context/CardContext'
import CartCard from './CartCard'
import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Cart = () => {

    let {cartitems,setcartitems} = useMyContext()
    const grandTotal = cartitems.reduce((total, item) => total + item.total, 0);

    const [show, setShow] = useState(false);

    let navigate = useNavigate()

  const handleClose = () => {
    setShow(false);
    setcartitems([])
    navigate("/")
  }
  const handleShow = () => setShow(true);


    

  return (
    <div>
      {/* {JSON.stringify(cartitems)} */}
      {
        cartitems.map((v,i)=>{
          return <CartCard  price={v.total} image={v.image} title = {v.title} quantity={v.qty}  />
        })
      }
      <p className='text-end mt-3 '><b>Grand Total</b> : {grandTotal}$</p>
      
      <Button onClick={handleShow} disabled={grandTotal <= 0} className='float-end' variant='dark'>Check Out </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Placed !</Modal.Title>
        </Modal.Header>
        <Modal.Body>Thanks for ordering from Dukaan.pk ! </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      
    </div>
  )
}

export default Cart
