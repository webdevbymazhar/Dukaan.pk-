
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ProductCard({image,title,desc,price,id}) {
   

    const summary = desc.substring(0, 90) + "..."

  return (
    <Card className='p-2' style={{ width: '22rem' }}>
      <Card.Img className='d-block m-auto' style={{width:"150px",height:"150px"}} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {summary}
        </Card.Text>
         <p style={{fontSize:"20px"}}><b>Price :</b> {price} $</p>
        <Button variant="dark"><Link to={`/product-preview/${id}`} style={{textDecoration:"none",color:"white"}}>Details</Link></Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;