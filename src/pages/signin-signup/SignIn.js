import React from 'react'

import { Header } from '../../components/layout/Header'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import CustomInput from '../../components/custom-input/CustomInput'

const SignIn = () => {
  
    const inputs = [
      
    {
      label: "Email",
      name: 'email',
      type: 'email',
      placeholder: "sam@sam.com",
      required: true
    },
    {
      label: "Password",
      name: 'password',
      type: 'password',
      placeholder: "*******",
      required: true
    },
    

    ]
  return (
    <div>
      <Header />

      <Container style={{minHeight:"90vh"}}>
        <Row>
          <Col>
          <Form className='border rounded shadow-lg p-5  m-auto bg-light' style={{maxWidth:"500px"}}>
            <h2 className='mb-5'>Welcome to Admin Panel</h2>
            {inputs.map((item,i)=>(
              <CustomInput key={i} {...item}/>

            ))}
            <div className="text-end mt-2 mb-4">
              Forget Password? <a href='reset-password'>Reset Password</a>
            </div>
            <div className="mt-3 d-grid">
              <Button variant="primary">Login</Button>
            </div>
            <div className=''></div>
            </Form>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default SignIn
