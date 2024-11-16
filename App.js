import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Menu from './Menu';
import TheForm from './TheForm'; 
import Footer from './Footer'; // Import TheForm component

const App = () => {
  return (
    <Router> {/* Wrap the entire app in Router */}
      <div className="App">
        <Header />
        <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Menu />} /> {/* Home route */}
          <Route path="/customize" element={<TheForm />} /> {/* Route for TheForm */}
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
