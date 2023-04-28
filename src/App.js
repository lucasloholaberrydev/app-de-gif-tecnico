import React, {useState} from 'react';
import './App.css';
import ListOfGifs from './component/listOfGifs';

import {Link, Route} from 'wouter';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/skateboarding'>Gif De Skate Boarding</Link>
        <Link to='/gif/argentina'> Gif De argentina</Link>
        <Link to='/gif/futbol'> Gif De Futbol</Link>
        <Link to='/gif/react.js'>Gif de React.js</Link>

        <Route
        component={ListOfGifs}
        path='/gif/:keyword'
        />
      </section>
    </div>
  )
}

export default App;
