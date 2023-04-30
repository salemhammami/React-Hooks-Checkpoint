import { Rating, Typography } from "@mui/material"
import { Card } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const DescriptionCard = ({movies,el}) => {


    const{id}= useParams()
    const found = movies.find(el=> el.id ==id)


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>

<Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>

        <Card.Img className="" variant="top" src={found.posterUrl} />
        <Modal.Title><h1>{found.title}</h1></Modal.Title>
        <p>{found.description}</p>
        {/* <Typography>{found.rating}</Typography> */}
        <Rating name="read-only" value={found.rating} readOnly /> 


        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>





        {/* <Card.Img className="cardStyle" variant="top" src={found.posterUrl} />
        <h1>{found.title}</h1>
        <p>{found.description}</p>
        <Rating>{found.rating}</Rating> */}
    </div>
  )
}

export default DescriptionCard