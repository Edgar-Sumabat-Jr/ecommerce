import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Header from './pages/Header';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Todo from './components/Todo';
import Test from './pages/Test';
import Loginpage from './pages/LoginPage';
import Registerpage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';


import PrivateRoute from './components/PrivateRoute';


import { AuthProvider } from './context/AuthContext';
import Test2 from './pages/Test2';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
            <Route index element={<Home />} />
            <Route path='login' element={<Loginpage />} />
            <Route path='todo' element={<Todo />} />
            <Route path='register' element={<Registerpage />} />
            <Route path='profile' element={<ProfilePage />} />

            <Route path="profile" element={<PrivateRoute element={ProfilePage} />} />



            <Route path='test2' element={<Test2 />} />


            <Route path='*' element={<NoPage />} />
            <Route path='test' element={<Test />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>




  );
}

export default App
