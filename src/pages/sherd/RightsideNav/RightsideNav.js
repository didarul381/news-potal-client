import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ListGroup from 'react-bootstrap/ListGroup';
import Carousel from 'react-bootstrap/Carousel';
import{FaGoogle}  from 'react-icons/fa'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightsideNav = () => {
  const {providerLogin}=useContext(AuthContext)
  const googlProvider= new GoogleAuthProvider();

  const handleGoogleSingIn =()=>{
    providerLogin(googlProvider)
    .then(result=>{
      const user=result.user
      console.log(user)
    })
    .catch(error=>console.error(error))

  }
    return (
        <div>
            <ButtonGroup vertical>
      <Button  variant="outline-primary" onClick={handleGoogleSingIn}> <FaGoogle></FaGoogle> Loginwith google</Button>
      <Button  variant="outline-dark">Loginwith github</Button>
     
    </ButtonGroup>
    <div>
        <h4>Find us on..</h4>
        <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
    </div>
    <div className='mt-4 bg-primary'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
    </div>
        </div>
    );
};

export default RightsideNav;