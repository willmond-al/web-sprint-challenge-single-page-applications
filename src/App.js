import React from "react";
import { Route, Link } from 'react-router-dom'
import Home from './Home'
import Pizza from './Pizza'

const App = () => {
  return (
    <div className="App">
      <h1>Lambda Eats</h1>
      <Link to='/'>Home</Link>
      <Link to='/pizza'>Order Now</Link>
      <Route path='/pizza'>
        <Pizza/>
      </Route>
      <Route path='/'>
        <Home/>
      </Route>

    </div>
    
  );
};
export default App;
