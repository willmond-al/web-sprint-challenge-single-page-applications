import React from 'react'

export default function PizzaOrder(props){
    const { details } = props

    return(

        <div className='order-container'>
            <h2>Pizza for: {details.name}</h2>
            <p>Size: {details.size}</p>
        <div>
          Toppings:
          <ul>
            {details.toppings.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
        </div>
            <p>Special Instructions: {details.instructions}</p>
        </div>

    )
}