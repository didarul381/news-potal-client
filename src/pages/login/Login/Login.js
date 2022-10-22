import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Login = () => {
    const navigate=useNavigate();
    const{singIn,setLoding}=useContext(AuthContext);
   const[error,setError]=useState('');
   const location=useLocation();
   const from=location.state?.from?.pathname||'/';


    const handleSubmit =(event)=>{
       event.preventDefault();
    const form=event.target;
//   const name=form.name.value;
//   const photoUrl=form.photoUrl.value;
  const email=form.email.value;
  const password=form.password.value;
  console.log(email);
  singIn(email,password)
  .then(result=>{
    const user=result.user;
     console.log(user)
     form.reset();
     setError('');
     if(user.emailVerified)
     {
      navigate(from,{replace:true});
     }else{
      toast.error("your email not verified");
     }
  }).catch(error=>{
    console.error(error)
    setError(error.message);
  
  })
  .finally(()=>{
    setLoding(false);
  })

    }
    return (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter email" />
         
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control  name='password' type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-danger">
           {error}
          </Form.Text>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
};

export default Login;