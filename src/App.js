import React, { useState } from "react";
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'
import PizzaOrder from './PizzaOrder'

const initialFormValues = {
  name: "",
  size: "",
  toppings: "",
  instructions: ""
}
const App = () => {


  const [orders, setOrders] = useState([])
  const [formValues, setFormValues] = useState([initialFormValues])

  const updateForm = (inputName, inputValue) => {
    setFormValues({
      ...formValues, 
      [inputName]:inputValue, 
    })
  }

  const submitForm = () =>{
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size,
      toppings: formValues.toppings, 
      instructions: formValues.instructions
    }
    if(!newOrder.name || !newOrder.size || !newOrder.toppings || !newOrder.instructions) return

    
    setOrders([...orders, newOrder])
    setFormValues(initialFormValues)
  }


  return (
    <div className="App">
      <header>
      <h1>Lambda Eats</h1>
      <Link to='/'>Home</Link>
      <Link to='/pizza'>Order Now</Link>
      </header>
      <Route path='/pizza'>
        <Pizza
        values={formValues}
        submit={submitForm}
        update={updateForm}>

        {orders.map(order=>{
          return <PizzaOrder key={order.id} details={order}/>
        })}
        </Pizza>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>

    </div>
    
  );
};
export default App;
