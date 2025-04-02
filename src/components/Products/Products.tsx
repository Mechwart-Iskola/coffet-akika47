import React, { useEffect, useState } from 'react';
import ProductCard from '../productCard/ProductCard'; 
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductsData = async () => {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsData();
  }, []); 

  return (
    <div className="products">
      <h2 className="section__title">Our Products</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="products__container">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;