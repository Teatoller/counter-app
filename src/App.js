import React from 'react';
import Counter from './Counter';
import store from './store';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter store={store} />
    </div>
  );
}

export default App;
