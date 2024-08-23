import { useState } from 'react'
import './App.css'
import Card from './Components/Card/Card';
import Grid from './Components/grid/grid';



function App() {
  let [count, setCount] = useState(0)
  function decrement(){
    setCount(count-1);
  }
  function increment(){
    setCount(count+1);
  }
  return (
    <>
    <Grid numberofcard={9}/>


    </>
  )
}

export default App
