import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Register = () => {
    const{ createUser,updateUserProfile,emailVarified}=useContext(AuthContext)
  const[error,setError]=useState('');
  const[accepted,setAccepted]=useState(false);


    const handleSubmit =(event)=>{
  event.preventDefault();
  const form=event.target;
  const name=form.name.value;
  const photoUrl=form.photoUrl.value;
  const email=form.email.value;
  const password=form.password.value;
  console.log(name);

  createUser(email,password)
  .then(result=>{
    const user=result.user;
     console.log(user)
     setError('')
     form.reset();
     handleUpdateUserProfile(name,photoUrl)
     handleEmailVarification();
     toast.success("please varify your email");
  }).catch(error=>{
    console.error(error);
    setError(error.message);
  })
    }
     const handleUpdateUserProfile=( name, photoUrl)=>{
       const profile ={
           displayName:name,
           photoUrl: photoUrl
       }
       updateUserProfile( profile)
       .then(()=>{})
       .catch(error=>{
        console.error(error);
        
      })
     }


        const handleEmailVarification=()=>{

          emailVarified()
          .then(()=>{})
          .catch(error=>{
            console.error(error);
            
          })
        }
       const handleAccepted=(event)=>{
          setAccepted(event.target.checked)

       }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>name</Form.Label>
          <Form.Control name='name' type="text" placeholder="Enter name"  />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control name='photoUrl' type="text" placeholder="Enter email"  />
         
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email"  required/>
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            id="disabledFieldsetCheck"
            label={<>Accept <Link to='/terms'>Terms & Condiition</Link></>}
          />
        </Form.Group>
        <Form.Text className="text-danger">
           {error}
          </Form.Text>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Submit
        </Button>
      </Form>
    );
};

export default Register;