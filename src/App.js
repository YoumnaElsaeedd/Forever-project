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
import ShopContextProvider from './context/shoppContext'; 

function App() {
  return (
    <ShopContextProvider> 
      <BrowserRouter>
        <Navbar />
        <SearchBar />
        <div className='px-20'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/collection' element={<Collection />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/product/:productId" element={<Details />} />
            <Route path="/login" element={<Login2 />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;



