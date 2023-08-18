import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
// import { findUserInfo } from './api/auth'

import Home from './pages/Home';
import Register from './pages/Register';
import User from './pages/User';
import Footer from './components/footer'

import Navbar from './components/navbar'
import Products from './pages/Products';
import Basket from './pages/Basket';
import Purchase from './pages/Purchase'
import Success from './pages/Success'

export const Context = React.createContext();

function App() {
  const [cookies, setCookie ] = useCookies(null)
  const [basket, setBasket] = useState([])

  return (
    <Context.Provider value={[basket, setBasket]} >
      <Router className="App">
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/register'
            element={!cookies.AuthToken ? <Register /> : <Navigate to={`/users/${cookies.ID}`} />}
          />
          <Route path='users/:user_id' element={cookies.AuthToken ? <User /> : <Navigate to='/register' /> } />
          <Route path='products' Component={Products} />
          <Route path='basket' Component={Basket} />
          <Route path='/purchase' Component={Purchase} />
          <Route path='/success' Component={Success} />
        </Routes>
        <Footer />
      </Router>
    </Context.Provider>
  );
}

export default App;
