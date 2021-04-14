import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (<div>
        <h1>React App</h1>
        <h3>By Diana Villalvazo</h3>
      <Link to="/button">
        <p>Ir al botón</p>
      </Link>
      <Link to="/image">
        <p>Ir a la imagen</p>
      </Link>
      <Link to="/modal">
        <p>Ir al Modal</p>
      </Link>
        </div>);
}

export default Home;