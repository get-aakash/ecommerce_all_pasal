import React from 'react'
import {AdminLayout} from '../../components/layout/AdminLayout'
import { Header } from '../../components/layout/Header'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Footer } from '../../components/layout/Footer'
import CustomInput from '../../components/custom-input/CustomInput'

const Signup = () => {
  const inputs = [
    {
    label: "First Name",
    name: 'fname',
    type: 'text',
    placeholder: "sam",
    required: true
  },
  {
    label: "Last Name",
    name: 'lname',
    type: 'text',
    placeholder: "sam",
    required: true
  },
  {
    label: "Phone",
    name: 'phone',
    type: 'number',
    placeholder: "00000",
    required: true
  },
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
    placeholder: "*****",
    required: true
  },
  {
    label:"Confirm Password",
    name: 'confirmPassword',
    type: 'text',
    placeholder: "******",
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
            <h2 className='mb-4'>Admin Registration</h2>
            {inputs.map((item,i)=>(
              <CustomInput key={i} {...item}/>

            ))}
            <div className="mt-3 d-grid">
              <Button variant="primary">Register New Admin</Button>
            </div>
            <div className='text-end mt-4'>Already registered?<a href='/'>Login</a></div>
            </Form>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Signup
