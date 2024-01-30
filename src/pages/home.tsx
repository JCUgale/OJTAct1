import React from 'react';
import { Link } from 'react-router-dom';
import '.././styles/home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <h1 className="home-digital-transformation">DIGITAL TRANSFORMATION</h1>
      <h3 className="home-author">Created by: Juan Carlos Ugale</h3>
      <div>
        <Link to="/calculator">
          <button>Basic Calculator</button>
        </Link>
        <Link to="/json">
          <button>JSON Sample</button>
        </Link>
        <Link to="/hobbies">
          <button className='btn-info'>About me</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;