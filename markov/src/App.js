import React from 'react';
import './App.css';

// components 
import Header from './components/Header.js'; 
import UserGrid from './components/UserGrid';

function App() {
  return (
    <div className="App">
      <Header />
      <UserGrid />
    </div>
  );
}

export default App;
