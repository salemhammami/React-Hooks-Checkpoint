
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const CardMovie =({el,movies,setMovies})=>{

    //Show more Show less
    const [showMore, setShowMore] = useState(false);
    const handleDelete=(x)=>{
      setMovies(movies.filter(el=> el.id !== x))}

    return(
        <Card className='cardStyle'>
      <Card.Img variant="top" src={el.posterUrl} />
      <Card.Body>
        <Card.Title style={{ fontSize: '1.5rem' }}>{el.title}</Card.Title>
        <Card.Text style={{ color:'grey'}}>
            {showMore ? el.description : el.description.substring(0, 70)} <br /> <br />
            <button className="showBtn" onClick={()=> setShowMore(!showMore)}>{showMore? "Show less.." : "Show more.."}</button>
          {/* {el.description} */}
        </Card.Text>
        <Rating name="read-only" value={el.rating} readOnly /> <br></br> <br></br>
        <Button onClick={()=>handleDelete(el.id)} variant="dark" className='btnDel' >Delete</Button>
      </Card.Body>
      
    </Card>
    )
}

export default CardMovie