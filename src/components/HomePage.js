import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="container p-5">
    <h1 className="">Welcome to Hello Rails React app</h1>
    <p>This app obtains data from a rails app backend api</p>
    <Link to="/greetings" className="btn-primary btn">
      Greetings
    </Link>
  </div>
);

export default HomePage;
