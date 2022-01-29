import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Properties from './pages/Properties';
import Agents from './pages/Agents';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import PropertySingle from './pages/PropertySingle';
import Header from './components/Header';
import Footer from './components/Footer';
import BlogSingle from './pages/BlogSingle';
import BlogCategoryArchive from './pages/BlogCategoryArchive';
import SearchResult from './pages/SearchResult';

function App() {
  return (
    <Layout>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='properties' element={<Properties />} />
          <Route path='/properties/:id' element={<PropertySingle />} />
          <Route path='agents' element={<Agents />} />
          <Route path='about-us' element={<About />} />
          <Route path='blog' element={<Blog />} />
          <Route path='/blog/:id' element={<BlogSingle />} />
          <Route path='/blog/category=:category' element={<BlogCategoryArchive />} />
          <Route path='contact-us' element={<Contact />} />
          <Route path='/property-search' element={<SearchResult/>} />
        </Routes>
    </Layout>
  );
}

export default App;
