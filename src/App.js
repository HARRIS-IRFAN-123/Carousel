import React from 'react';
import './App.css';
import Carousel from './components/Carousel';
import slides from './data/Carousel.json';

function App() {
  return (
    <div className="App">
      <Carousel data={slides.slides} />
    </div>
  );
}

export default App;
