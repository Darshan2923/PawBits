import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/Service';
import PetBreedQuestionnaire from './components/PetBreedQuestions';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Service />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/lifestyle' element={<PetBreedQuestionnaire />} />
      </Routes>
    </>
  )
}

export default App
