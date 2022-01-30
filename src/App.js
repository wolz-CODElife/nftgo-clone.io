import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import PagesRoutes from './routes/Routes';

const App = () => {
  return (
  <Router>
    <PagesRoutes />
  </Router>
  )
};

export default App;
