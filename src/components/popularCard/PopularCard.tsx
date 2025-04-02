import React from 'react';
import "./popularcard.css";

type PopularCardProps = {
  item: {
    name: string;
    description: string;
    price: number;
    image: string;
  };
};

const PopularCard: React.FC<PopularCardProps> = ({ item }) => {
  return (
    <div className="popular__card">
      <div className="popular__images">
        <img src={item.image} alt={item.name} className="popular__coffee" />
        <div className="popular__shape"></div>
        <img src="img/bean-img.png" alt="bean" className="popular__bean-1"/>
        <img src="img/bean-img.png" alt="bean" className="popular__bean-2"/>
      </div>
      <div className="popular__data">
        <h3 className="popular__name">{item.name}</h3>
        <p className="popular__description">{item.description}</p>
        <span className="popular__price">{item.price}</span>
      </div>
    </div>
  );
};

export default PopularCard;
