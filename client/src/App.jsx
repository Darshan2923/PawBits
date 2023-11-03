import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/Service';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
