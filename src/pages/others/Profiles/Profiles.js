import React, {useState, useContext, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Profiles = () => {
     const {user}=useContext(AuthContext);
     const[name,setName]=useState(user.displayName);
     const photoUrlRef=useRef(user.photoUrl);

      const handleSubmit=(event)=>{
      event.target.preventDefault();
      console.log(photoUrlRef.current.value)


      }

       const handleNameChange=(event)=>{

           setName(event.target.value)
       }

    return (
        <Form onSubmit={handleSubmit} >
             <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control onChange={handleNameChange}  defaultValue={name} name='name' type="text" placeholder="Enter name"  />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control  ref={photoUrlRef} defaultValue={user?.photoUrl} name='photoUrl' type="text" placeholder="Enter email"  />
         
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control readOnly  defaultValue={user?.email}  name='email' type="email" placeholder="Enter email"  required/>
         
        </Form.Group>
  
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    );
};

export default Profiles;
