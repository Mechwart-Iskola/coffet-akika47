import React, { useEffect, useState } from 'react';
import "./popular.css";
import PopularCard from '../popularCard/popularCard';

const Popular = () => {
  const [popularItems, setPopularItems] = useState<any[]>([]); 
  const [loading, setLoading] = useState<boolean>(true); 

  useEffect(() => {
    const fetchPopularData = async () => {
      try {
        const response = await fetch('/popular.json'); 
        const data = await response.json();
        setPopularItems(data);  
      } catch (error) {
        console.error('Error fetching popular data:', error);  
      } finally {
        setLoading(false);
      }
    };

    fetchPopularData(); 
  }, []); 

  return (
    <div className="popular">
      <h2 className="section__title">Popular Items</h2>

      {loading ? (
        <p>Loading...</p> 
      ) : (
        <div className="popular__container">
          <div className="popular__coffes">
            {popularItems.map((item, index) => (
              <PopularCard key={index} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popular;