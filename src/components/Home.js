import React from 'react';
import Navbar from './Navbar';

const Home = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <h1 className="mb-4">MAKE UP</h1>
        <img 
          src="https://img.freepik.com/premium-photo/set-different-makeup-objects_144962-8846.jpg" 
          alt="Makeup Products"
          className="img-fluid rounded shadow"
          style={{ maxWidth: "500px" }}
        />
      </div>
    </>
  );
};

export default Home;
