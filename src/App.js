import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from './layout/Navbar';
import PagesRoutes from './routes/Routes';

const App = () => {
  return (
  <Router>
    <Navbar />
    <PagesRoutes />
  </Router>
  )
};

export default App;
