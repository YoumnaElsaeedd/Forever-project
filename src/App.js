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
import Checkout from './pages/Checkout'
import ShopContextProvider from './context/shoppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPanel from './pages/AdminPanel';

function AppContent() {
  const location = useLocation();
  const isAdminPanel = location.pathname.startsWith('/AdminPanel'); // تحقق من جميع مسارات /AdminPanel

  return (
    <>
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
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/AdminPanel/*' element={<AdminPanel />} /> {/* دعم المسارات الفرعية */}
        </Routes>
      </div>
      {!isAdminPanel && <Footer />}
    </>
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






