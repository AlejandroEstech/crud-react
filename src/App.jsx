import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './components/shared/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import UserForm from './components/UserForm'
import UserList from './components/UserList'

function App() {


  return (
    <>

        <BrowserRouter>
        <Nav />
          <Routes>
            <Route path='/home' element= {<Home />} ></Route>
            <Route path='/user-form' element= { <UserForm />} ></Route>
            <Route path='/user-list' element= {<UserList/>} ></Route>
          </Routes>
        </BrowserRouter>
  

     
      

    

      
    </>
  )
}

export default App
