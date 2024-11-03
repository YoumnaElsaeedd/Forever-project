import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Collection from './pages/collection';
import Contact from './pages/contact';
import Navbar from './includes/navbar';
import Details from './components/Details';
import Footer from './includes/Footer';
import Login2 from './pages/LoginForm';
import SearchBar from './components/SearchBar';
import Cart from './pages/Cart';
import MyOrders from './pages/MyOrders';
import ShopContextProvider from './context/shoppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from './pages/AdminPanel';
import Checkout from './pages/checkout';
import Login from './pages/Login';


function AppContent() {
  const location = useLocation();
  const isAdminPanel = location.pathname.startsWith('/AdminPanel'); 
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      {!isAdminPanel && <Navbar />}
      {!isAdminPanel && <SearchBar />}
      <div className={isAdminPanel ? '' : 'px-20'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/product/:productId' element={<Details />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login2 />} />
          <Route path='/Checkout' element={<Checkout />} />
          <Route path='/MyOrders' element={<MyOrders/>} />
          <Route path='/LoginUser' element={<Login/>} />
          <Route path='/AdminPanel/*' element={<AdminPanel />} /> 
        </Routes>
      </div>
      {!isAdminPanel && <Footer />}
    </div>
  );
}

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;






