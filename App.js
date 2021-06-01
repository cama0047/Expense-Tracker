import React,{useState}from 'react'
import { Jumbotron, Container } from 'reactstrap'
import Form from "./components/Form.js"
import List from "./components/List.js"

function App() {
//const BASE_URL = process.env.REACT_APP_BASE_URL;

const ALL_EXPENSES = [
  { id: 1, name: 'Buy a book', amount: 20 },
  { id: 2, name: 'Buy a milk', amount: 5 },
  { id: 3, name: 'Book a flight ticket', amount: 225 }
]

const [expenses, setExpenses] = useState(ALL_EXPENSES)
const [name, setName] = useState()
const [amount, setAmount] = useState()



const handleName = (event) =>{
/*------ PRINT -------*/
console.log("name: ", event.target.value);
setName(event.target.value);

}

const handleAmount = (event) =>{
  /*------ PRINT -------*/
  console.log("Amount: ", event.target.value);
  setAmount(event.target.value);
}

const handleSubmitForm = (event) =>{
  event.preventDefault();

}


  return (

    <Container className='text-center'>
      <Jumbotron fluid>
        <h3 className='display-6'>
          Expense Tracker React App
        </h3>
        <div>
          <p>
            Total Expense:{' '}
            <span className='text-success'>
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        <Form name={name}
      amount={amount}
  handleName={handleName}
  handleAmount={handleAmount}
  handleSubmitForm={handleSubmitForm}/>
        <List expenses={expenses} />
      </Jumbotron>
    </Container>
  
  )
}
export default App