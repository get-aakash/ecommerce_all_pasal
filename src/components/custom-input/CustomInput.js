import React from 'react'
import { Col, Form } from 'react-bootstrap'

const CustomInput = ({label, ...rest}) => {
  return (
    <Form.Group as={Col} md="4" controlId="validationCustom01">
    <Form.Label>{label}</Form.Label>
    <Form.Control
      {...rest}
    />
    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
  </Form.Group>
  )
}

export default CustomInput
