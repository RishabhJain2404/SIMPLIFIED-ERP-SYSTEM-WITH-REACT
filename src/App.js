// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Order from './components/Order';
import Product from './components/Product';
import './App.css'; 

function App() {
  return (
    <Router>
      <div>

        <nav className="navbar">
          <ul className="nav-list">
          <li className="nav-item">
              <Link to="https://github.com/RishabhJain2404" className="nav-link">My GitHub</Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link">Products</Link>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">Orders</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;