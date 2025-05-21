import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import NoPage from './pages/NoPage';
import Todo from './components/Todo';
import Test from './pages/Test';
import Loginpage from './pages/LoginPage';
import Registerpage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';


import PrivateRoute from './components/PrivateRoute';


import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='login' element={<Loginpage />} />
            <Route path='todo' element={<Todo />} />
            <Route path='register' element={<Registerpage />} />
            <Route path='profile' element={<ProfilePage />} />

            <Route path="profile" element={<PrivateRoute element={ProfilePage} />} />

            <Route path='*' element={<NoPage />} />
            <Route path='test' element={<Test />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App
