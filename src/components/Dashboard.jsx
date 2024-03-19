import React from 'react';
import './Dashboard.css'; 
import { Link } from 'react-router-dom'; 

function Dashboard() {
  const totalProducts = 20;
  const totalOrders = 10;

  return (
    <div className="container">
      <h2 className="title">SIMPLIFIED ERP SYSTEM WITH REACT</h2>
      <div className="metricsContainer">
        <div className="metric">
          <Link to="/product">
            <h3>TOTAL PRODUCTS</h3>
            <p>{totalProducts}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>TOTAL ORDERS</h3>
            <p>{totalOrders}</p>
          </Link>
        </div>
        <div className="metric">
          <Link to="/order">
            <h3>CALENDAR</h3>
            <p>View Calendar</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;