import React from 'react';
import "./productcard.css";

type ProductCardProps = {
  product: {
    name: string;
    price: number;
    image: string;
  };
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="products__card">
      <div className="products__image">
        <div className="products__shape"></div>
        <img src={product.image} alt={product.name} className="products__coffe" />
        <img src="img/ice-img.png" alt="bean" className="products__ice-1"/>
        <img src="img/ice-img.png" alt="bean" className="products__ice-2"/>
      </div>
      <div className="products__data">
        <h3 className="products__name">{product.name}</h3>
        <p className="products__price">${product.price.toFixed(2)}</p>
      </div>
      <button className="products__button">+</button>
    </div>
  );
};

export default ProductCard;