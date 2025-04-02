import React from 'react';
import "./home.css";
import { homeImages } from '../../data/data';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Cold Coffee</h1>

      <div className="home__images">
        <div className="home__shape"></div>

        {homeImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
          />
        ))}
      </div>

      <div className="home__data">
        <p className="home__description">Enjoy the finest coffee blends, carefully crafted for every taste!</p>
        <a href="#about" className="button">Discover More</a>
      </div>
    </div>
  );
};

export default Home;