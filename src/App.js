import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Agents from './pages/Agents';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PropertySingle from './pages/PropertySingle';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='properties' element={<Properties />} />
          <Route path='/properties/:id' element={<PropertySingle />} />
          <Route path='agents' element={<Agents />} />
          <Route path='about-us' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact-us' element={<Contact />} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
