import React, { useState } from 'react';
import '../../fonts/Trebuchet/Trebuchet.css';
import '../../fonts/Exo2.0/Exo.css';
import './App.scss';
import Products from '../Products/Products';

function App() {
  const [selected, setSelected] = useState(false)
  
  const handleClick = (card) => {
    if(card.status === 'selected') {
      setSelected(false)
      card.status = 'unSelected'
    } else if (card.status === 'unSelected') {
      setSelected(true)
      card.status = 'selected'
    } else if (card.status === 'disabled'){
      return
    }
  }

  return (
    <div className="app">
      <Products 
        selected={selected}
        setSelected={setSelected}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
