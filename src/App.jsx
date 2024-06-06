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

  const firebaseConfig = {
    apiKey: "AIzaSyDowjGA7nTIl8S6iemB9o7xZhEOKozQmss",
    authDomain: "logintask-5c413.firebaseapp.com",
    projectId: "logintask-5c413",
    storageBucket: "logintask-5c413.appspot.com",
    messagingSenderId: "205380762311",
    appId: "1:205380762311:web:7ba48c2bbc479d66f9dce2",
    measurementId: "G-MD9N95XR0C"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);


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
