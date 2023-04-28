import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddMovie=({movies,setMovies})=>{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [posterUrl,setPosterUrl] = useState('')
    const [rating,setRating] = useState(0)
   
    const addMovie=()=> setMovies([...movies,{title,description,posterUrl, rating ,id : Math.random()}])

    return(
        <div className='addStyle'>
        <Button onClick={handleShow} variant="outline-danger" className='btnP'>Add movies</Button>{' '}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add movies</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control  onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter the title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Enter the description" />
      </Form.Group>
      
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Poster Url</Form.Label>
        <Form.Control onChange={(e)=>setPosterUrl(e.target.value)} type="text" placeholder="Enter the Poster Url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Rating</Form.Label>
        <Form.Control  onChange={(e)=>setRating(e.target.value)} type="text" placeholder="Enter rating" />
      </Form.Group>
      

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{addMovie();handleClose()}}>
            Add Movies
          </Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
}

export default AddMovie