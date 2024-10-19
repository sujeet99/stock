import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [selectedStock, setSelectedStock] = useState('AAPL');
  const stockOptions = ['AAPL', 'GOOGL', 'MSFT', 'AMZN', 'TSLA', 'FB', 'NFLX', 'NVDA', 'BABA', 'INTC'];

  return (
    <>
      <header>Stock Tracker Dashboard</header>
      <div className="stock-search-container">
        <h2>Select Trending Stock</h2>
        
        <div className="input-group">
          <select>
            {stockOptions.map((stock, index) => (
              <option key={index}>{stock}</option>
            ))}
          </select>
          <button className="load-btn">Load Stock</button>
        </div>

        <div className="input-group">
          <input type="text" placeholder="Search for a stock (e.g., AAPL)" />
          <button className="search-btn">Search</button>
        </div>
      </div>
      
      
      <footer className="footer">
        <h2>Compare Stocks</h2>
        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Price</th>
              <th>Change</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            
            
          </tbody>
        </table>
      </footer>
    </>
  );
};

export default App;
