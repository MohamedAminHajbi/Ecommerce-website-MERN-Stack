import React from 'react'
import Slider from 'react-slick'
import './Home.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Home = () => {
  const carouselItems = [
    { id: 1, imageUrl: 'image1.jpg', caption: 'Image 1' },
    { id: 2, imageUrl: 'image2.jpg', caption: 'Image 2' },
    { id: 3, imageUrl: 'image3.jpg', caption: 'Image 3' },
    // Add more items as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='home-container'>
      <div className="home-main-content home-content">
      <Slider {...settings}>
        {carouselItems.map((item) => (
          <div key={item.id}>
            <img src={item.imageUrl} alt={item.caption} />
            <p>{item.caption}</p>
          </div>
        ))}
      </Slider>
      </div>
      <div className="home-aside home-content">
        dsfdsfdqsfdqsf
      </div>
    </div>
  )
}

export default Home