// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Cursor from './components/Cursor';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import Services from './components/Services';
import { ThemeProvider } from './components/ThemeContent'; // Correct import for ThemeProvider
import Underdevelopment from './components/Underdevelopment';

function App() {
  return (
    <Router>
      <ThemeProvider> {/* Wrap your entire application with ThemeProvider */}
        <div>
        {/* Include the Cursor component */}
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Underdevelopment />} />
          </Routes>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
