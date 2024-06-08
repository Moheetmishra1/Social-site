import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/Components/Pages/Home'
import Login from './assets/Components/Pages/Login'
import SignUp from './assets/Components/Pages/SignUp'
import Navbar from './assets/Components/Navbar'
import ProtectedHome from './assets/Components/ProtectedHome'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Authontication from './assets/Components/Authontication'

function App() {

   


  return (
    <>
     

     <Authontication >
      
     <BrowserRouter >
      <Navbar />
     <Routes >
      <Route path="/" element={<ProtectedHome  ><Home /></ProtectedHome>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />

     </Routes>
     
     </BrowserRouter>
     </Authontication>

    </>
  )
}

export default App
