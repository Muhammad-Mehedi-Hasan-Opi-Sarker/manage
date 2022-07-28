import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Pricing from './Pages/Pricing/Pricing';
import Product from './Pages/Product/Product';
import Community from './Pages/Community/Community';
import About from './Pages/About/About';
import Careers from './Pages/Careers/Careers';
import Navbar from './Pages/Home/Navbar';
import Customers from './Pages/Home/Customers/Customers';
import Work from './Pages/Home/Work/Work';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/pricing' element={<Pricing></Pricing>}></Route>
        <Route path='/product' element={<Product></Product>}></Route>
        <Route path='/community' element={<Community></Community>}></Route>
        <Route path='about' element={<About></About>}></Route>
        <Route path='/careers' element={<Careers></Careers>}></Route>
      </Routes>
    </div>
  );
}
export default App;