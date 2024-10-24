import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import Checkout from './pages/Checkout';
import ShopContextProvider from './context/shoppContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <div className='px-20'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/product/:productId' element={<Details />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/login' element={<Login2 />} />
            <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;




