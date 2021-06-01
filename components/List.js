import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

/* component that is going to display a list of expense items with their corresponding amount. */

function List({expenses}) {
    return (
        <div key={expenses.id}>
    <ListGroup>

      {expenses.map(item => (
        <ListGroupItem key={item.id}>
          {item.name} - $ {item.amount}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
    )
}

export default List
