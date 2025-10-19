import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Header from './pages/Header';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import Todo from './components/Todo';
import Test from './pages/Test';
import Loginpage from './pages/LoginPage';
import Registerpage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';


// import PrivateRoute from './components/PrivateRoute';


// import { AuthProvider } from './context/AuthContext';
import Test2 from './pages/Test2';
import ThemeToggle from './components/ThemeToggle';
// import Footer from './components/Footer';


// components/layout.jsx
// import Layout from './components/Layout';
import Footer from './components/Footer'


import ProductsPage from './pages/ProductsPage';


import { Container } from 'react-bootstrap';
import CartPage from './pages/CartPage';

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path='login' element={<Loginpage />} />
            <Route path='product/:id' element={<ProductsPage />} />
            <Route path='todo' element={<Todo />} />
            <Route path='test' element={<Test />} />
            <Route path='test2' element={<Test2 />} />
            <Route path='*' element={<NoPage />} />

    {/* --------------------october 19, 2025-------------- */}
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/cart/:id?' element={<CartPage />} />

          
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App
