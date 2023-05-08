import { Rating } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router-dom"
import Button from 'react-bootstrap/Button';


const DescriptionCard = ({movies}) => {


    const{id}= useParams()
    const found = movies.find(el=> el.id==id)
  const navigate = useNavigate()


 

  return (
    <div className="Descript">
        {/* <img className="ImgDescript" src={found.posterUrl} alt="poster of movie" /> */}
        <iframe className="my-iframe" src={found.trailer} title="YouTube video player" frameborder="0" autoplay></iframe>
        <h1>{found.title}</h1>
        <p className="paraDescript">{found.description}</p>
        <Rating name="read-only" value={found.rating} readOnly />
        <Button  style={{ textDecoration: 'none', color:'white' }} variant="dark" className='btnBack' onClick={()=>navigate('/')} > Back </Button>
        
        

    </div>
  )
}

export default DescriptionCard