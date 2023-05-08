import React from 'react'
import { Navbar,Container,Nav } from "react-bootstrap";
import Logo from '/Users/mac/Desktop/GoMyCode/Divers/We/we/src/Logo.svg';
import AddMovie from './AddMovie';
import { Link } from 'react-router-dom';
function NavMovie({movies,setMovies}) {

  
  
  return (
    <div>
<Navbar bg="dark " variant="dark ">
        <Container>
        <a href="/"><img src= {Logo} alt="Logo" className='logo' /></a>
          <Nav  className="d-flex justify-content-between" >
            <Nav.Link as={Link} to="/" href="#home" className='changetext' style={{paddingRight:'50px'}}> Home</Nav.Link>
            
            <Nav.Link as={Link} to="/pricing" className='changetext' style={{paddingRight:'50px'}}>Pricing</Nav.Link>


             </Nav>
             <AddMovie movies={movies} setMovies={setMovies} />  
        </Container>
      </Navbar>


    </div>
  )
}

export default NavMovie