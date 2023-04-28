import React from 'react'
import { Navbar,Container,Nav } from "react-bootstrap";
import Logo from '/Users/mac/Desktop/GoMyCode/Divers/We/we/src/Logo.svg';
import AddMovie from './AddMovie';
function NavMovie({movies,setMovies}) {

  
  
  return (
    <div>
<Navbar bg="dark " variant="dark ">
        <Container>
        <img src= {Logo} alt="Logo" className='logo' />
          <Nav  className="d-flex justify-content-between" >
            <Nav.Link style={{paddingRight:'50px'}} href="#home" className='changetext'>Home</Nav.Link>
            <Nav.Link style={{paddingRight:'50px'}} href="#movies" className='changetext'>Movies</Nav.Link>
            <Nav.Link style={{paddingRight:'50px'}} href="#tvShow" className='changetext'>TV Show</Nav.Link>


            <Nav.Link href="#pricing" className='changetext'>Pricing</Nav.Link>
             </Nav>
             <AddMovie movies={movies} setMovies={setMovies} />  
        </Container>
      </Navbar>


    </div>
  )
}

export default NavMovie