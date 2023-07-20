import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Route path="/about" component={AboutUs} />
    </Router>
  );
};

export default App;
