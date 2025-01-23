import './App.css';
import Home from './compo/Home';
import Contact from './compo/Contact';
import About from './compo/About';
import {Route , Routes} from "react-router-dom";
import Nav from './compo/Nav';
import LogIn from './compo/LogIn';
import SignUp from './compo/SignUp';
import React, { useState } from 'react'
import Dashboard from './compo/Dashboard';


function App() {

  const[login,setLogIn] = useState(false);


  return (
    <div className="App">

      <Nav login={login} setLogIn={setLogIn} ></Nav>




      <Routes>
      <Route path="/" element={<Home></Home>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path='/LogIn' element={<LogIn login={login} setLogIn={setLogIn}>



        </LogIn>}></Route>
        {
         login &&
        <Route path='/dashboard' element={<Dashboard login={login} setLogIn={setLogIn} ></Dashboard>}></Route>

        }


        <Route path='/SignUp' element={<SignUp login={login} setLogIn={setLogIn}>

        </SignUp>}></Route>

        <Route path='*' element={<div className='flex justify-center pt-96 text-2xl font-bold'>Error</div>}></Route>

      </Routes>
    </div>
  );
}

export default App;
