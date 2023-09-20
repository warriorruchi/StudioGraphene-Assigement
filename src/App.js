import Home from './Components/Home page/home';
import About from './Components/About page/about';
import Contact from './Components/Contact page/contact';
import Product from './Components/Product page/product';
import { Route, Link,Routes } from 'react-router-dom';
import './App.css';

function App() { 
  return (
    <>
      <nav>
         <ul className="nav-list">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/products">OUR PRODUCTS</Link>
          
          <ul className="sub-menu">
              <li><Link to="/products/p1">PRODUCT 1</Link></li>
              <li><Link to="/products/p2">PRODUCT 2</Link></li>
              <li><Link to="/products/p3">PRODUCT 3</Link></li>
              <li><Link to="/products/p4">PRODUCT 4</Link></li>
            </ul>
          
          
          </li>
          <li><Link to="/contact" >CONTACT US</Link></li>
          </ul>
        

      </nav>
     
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/products" element={<Product/>} />
        <Route path="/products/p1" element={<Product />} />
        <Route path="/products/p2" element={<Product />} />
        <Route path="/products/p3" element={<Product />} />
        <Route path="/products/p4" element={<Product />} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
