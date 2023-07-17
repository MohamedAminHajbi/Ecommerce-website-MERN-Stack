import React from 'react';
import bg from "../../Assets/index-bg.jpg";
import './Index.css'
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className='index-container' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='index-content'>
        <div className="hello">Hello everyone!</div>
        <Link className="btn-start" to='/home'>
            GET STARTED
        </Link>
      </div>
    </div>
  );
};

export default Index;
