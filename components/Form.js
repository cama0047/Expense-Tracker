import React from 'react'
import {
  Form as BTForm,
  FormGroup,
  Input,
  Label,
  Col,
  Button
} from 'reactstrap'

function Form({ name, amount, handleName, handleAmount, handleSubmitForm, handleClearAll}) {
    return (
        <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
    <FormGroup className='row'>
      <Label for='exampleEmail' sm={4}>
        Name of Expense
      </Label>
      <Col sm={4}>
        <Input
          type='text'
          name='name'
          id='expenseName'
          placeholder='Name of expense?'
          value={name}
          onChange={handleName}
        />
      </Col>
    </FormGroup>
    <FormGroup className='row'>
      <Label for='exampleEmail' align="right" sm={4}>
        Amount $
      </Label>
      <Col sm={4}>
        <Input
          type='number'
          name='amount'
          id='expenseAmount'
          placeholder='0.00'
          value={amount}
          onChange={handleAmount}
        />
      </Col>
    </FormGroup >

    <FormGroup >
    <Button type='submit' color='primary'>
      Add
    </Button>{' '}
    <Button type='submit' color='danger' onClick={handleClearAll}>
      Delete
    </Button>
    </FormGroup>
  </BTForm>

    )
}

export default Form
