import React from 'react';
import bg from "../../Assets/index-bg.jpg";
import './Index.css'

const Index = () => {
  return (
    <div className='index-container' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className='index-content'>
        <div className="hello">Hello everyone!</div>
        <button class="btn-start">
            <div>GET STARTED</div>
            <svg fill="none" viewBox="0 0 24 24" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="white" d="M11.6801 14.62L14.2401 12.06L11.6801 9.5"></path>
            <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="white" d="M4 12.0601H14.17"></path>
            <path stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" stroke="white" d="M12 4C16.42 4 20 7 20 12C20 17 16.42 20 12 20"></path>
            </svg>
        </button>
      </div>
    </div>
  );
};

export default Index;
