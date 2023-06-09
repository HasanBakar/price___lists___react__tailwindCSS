import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import PriceLists from './components/PriceLists/PriceLists';


function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App container mx-auto"> 
        <Navbar></Navbar>
        <PriceLists></PriceLists>
    </div>
  )
}

export default App
