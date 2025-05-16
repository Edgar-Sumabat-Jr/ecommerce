import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Loginpage from './components/Loginpage';

// pages
import Layout from './pages/Layout';
import Home from './pages/Home';
import Blogs from './pages/Blogs';
import NoPage from './pages/NoPage';
import Todo from './components/Todo';
import Test from './pages/Test';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='blogs' element={<Blogs />} />
          <Route path='login' element={<Loginpage />} />
          <Route path='todo' element={<Todo />} />
          <Route path='*' element={<NoPage />} />
          <Route path='test' element={<Test />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App
