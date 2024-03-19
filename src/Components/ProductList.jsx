import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching data');
        setLoading(false);
      });
  }, []);

  const toggleDescription = (id) => {
    setProducts(products.map(product => {
      if (product.id === id) {
        return { ...product, showDescription: !product.showDescription };
      }
      return product;
    }));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          {products.map(product => (
            <Product
              key={product.id}
              product={product}
              toggleDescription={toggleDescription}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
