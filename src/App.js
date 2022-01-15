import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Agents from './pages/Agents';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PropertySingle from './pages/PropertySingle';

function App() {
  return (
    <div className='App'>
      <Header />
      <main className='site-content'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='properties' element={<Properties />} />
          <Route path='/properties/:id' element={<PropertySingle />} />
          <Route path='agents' element={<Agents />} />
          <Route path='about-us' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contact-us' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
