import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Misc from './pages/Misc';

function App() {
  return (
    <Router basename="/personal_website">  {/* ✅ Added basename for GitHub Pages */}
      <div className="min-h-screen bg-gray-50 font-sans">
        {/* NAVBAR */}
        <nav className="bg-white shadow-md fixed w-full z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex-shrink-0">
                <Link to="/" className="text-green-800 text-2xl font-bold">
                  Owen Hanson
                </Link>
              </div>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-gray-700 hover:text-green-800 transition">Home</Link>
                <Link to="/projects" className="text-gray-700 hover:text-green-800 transition">Projects</Link>
                <Link to="/blog" className="text-gray-700 hover:text-green-800 transition">Blog</Link>
                <Link to="/misc" className="text-gray-700 hover:text-green-800 transition">Misc</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="pt-16">  {/* Offset for fixed navbar */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />        {/* ✅ Made lowercase for consistency */}
            <Route path="/misc" element={<Misc />} />        {/* ✅ Made lowercase for consistency */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
