import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftsideNav from '../LeftsideNav/LeftsideNav';

const Header = () => {
  const {user, googleLogOut}=useContext(AuthContext);

    const handleLogout =()=>{

      googleLogOut()
      .then(()=>{})
      .catch(error=>console.error(error))
    }
    return (
       
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><Link to='/'>News protal</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">All News</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Link to='/profile'>
              {
                user?.uid?
                <>
                
                <span>{user?.displayName}</span>
                <Button onClick={handleLogout}>Logout</Button>
                </>
                :
                <>
                 <Link to='/login'>Login</Link>
                 <Link to='/register'>Register</Link>
                </>
              }
             
               </Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
             
            </Nav.Link>
          </Nav>
          <div className=' d-lg-none'>
            <LeftsideNav></LeftsideNav>
          </div>
        </Navbar.Collapse>
        </Container>
    </Navbar>
       
    );
};

export default Header;