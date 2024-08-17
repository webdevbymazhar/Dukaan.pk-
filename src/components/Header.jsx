import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cart from './Cart';
import { useMyContext } from '../context/CardContext';



const Header = () => {
  let [categories,setcategories] = useState([])
  const [show, setShow] = useState(false);
  let {cartitems} = useMyContext()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let fetchCategories = async ()=>{
    let res = await axios.get("https://fakestoreapi.com/products/categories")
    setcategories(res.data)
  }

  useEffect(()=>{
    fetchCategories()
  },[])
  return (
    <div className='mb-3' >
       <Navbar  bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand><Link style={{textDecoration:"none",color:"white"}} to={"/"}>Dukaan.pk</Link></Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse >
          <Nav className="ms-auto">
            <Nav.Link ><Link style={{textDecoration:"none",color:"white"}} to={"/"}>Home</Link></Nav.Link>
            
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {
                categories.map((v,i)=>{
                return <NavDropdown.Item key={i} ><Link style={{textDecoration:"none",color:"white"}} to={`/product/${v}`}>{v}</Link></NavDropdown.Item>
                })
              }
            </NavDropdown>
            
          <Nav.Link onClick={handleShow} ><FaShoppingCart style={{fontSize:"20px"}}/><span style={{color:"black",border:"1px solid black",borderRadius:"50%",padding:"0px 5px",fontSize:"15px",marginLeft:"3px",backgroundColor:"white"}}>{cartitems.length} </span></Nav.Link>
          </Nav>
          </Navbar.Collapse>
       
      </Container>
    </Navbar>

    <Offcanvas placement='end' show={show} onHide={handleClose} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart <FaShoppingCart/></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="mb-0">
            <Cart/>
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  )
}

export default Header
