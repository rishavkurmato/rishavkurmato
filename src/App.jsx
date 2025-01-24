import React ,{ useState } from 'react'
import './App.css'
import Head from './Head'
import Landing from './assets/Landing'
import UseState from './UseState'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <Head/>
      <Landing/>
      <UseState/>
    </>
  )
}

export default App
