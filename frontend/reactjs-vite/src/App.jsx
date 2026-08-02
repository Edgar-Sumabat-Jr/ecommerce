import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';

// Static Layout Components (Keep these imported normally so they load instantly)
import Header from './pages/Header';
import Footer from './components/Footer';

// Lazy Loaded Pages & Components (Split into smaller chunks)
const HomePage = lazy(() => import('./pages/HomePage'));
const Loginpage = lazy(() => import('./pages/LoginPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const Todo = lazy(() => import('./components/Todo'));
const Test = lazy(() => import('./pages/Test'));
const Test2 = lazy(() => import('./pages/Test2'));
const NoPage = lazy(() => import('./pages/NoPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const ShippingPage = lazy(() => import('./pages/ShippingPage'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const PlaceOrderPage = lazy(() => import('./pages/PlaceOrderPage'));
const OrderPage = lazy(() => import('./pages/OrderPage'));

function App() {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          {/* Suspense delays rendering until the specific page chunk finishes downloading */}
          <Suspense fallback={<div className="text-center my-5">Loading page...</div>}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path='login' element={<Loginpage />} />
              <Route path='product/:id' element={<ProductsPage />} />
              <Route path='todo' element={<Todo />} />
              <Route path='test' element={<Test />} />
              <Route path='test2' element={<Test2 />} />
              <Route path='*' element={<NoPage />} />

              {/* --------------------start, october 19, 2025-------------- */}
              <Route path='/profile' element={<ProfilePage />} />
              <Route path='/cart/:id?' element={<CartPage />} />
              {/* --------------------end, october 19, 2025-------------- */}

              {/* ---------------------start, october 20, 2025----------------- */}
              <Route path='/shipping' element={<ShippingPage />}></Route>
              <Route path='/payment' element={<PaymentPage />}></Route>
              {/* ---------------------end, october 20, 2025----------------- */}

              {/* ---------------------start, November 2, 2025----------------- */}
              <Route path='/placeorder' element={<PlaceOrderPage />}></Route>
              {/* ---------------------end, November 2, 2025----------------- */}

              {/* ---------------------start, November 5, 2025----------------- */}
              <Route path='/order/:id' element={<OrderPage />}></Route>
              {/* ---------------------end, November 5, 2025----------------- */}
            </Routes>
          </Suspense>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
