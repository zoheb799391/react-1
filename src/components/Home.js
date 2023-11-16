
import React from 'react'
import { useState , useContext} from 'react'
import context from '../context/Context'
import { Provider } from 'react-redux';
import Redux from './redux';

const Home = () => {

  const value = useContext(context)
  const [count, setcount] = useState(0) 
  function decrement()  {
    setcount(count-1);
  }
  function increment() {
    setcount(count + 1);
  }

  return (
    <div >
<h1> this count functionality is done by {value.Name} and his age is {value.age}</h1>
  <button onClick={decrement}>-</button>
  <span>{count}</span>
  <button onClick={increment}>+</button>

  <Provider>
  <Redux/>
  </Provider>


  </div>

  )
}

export default Home