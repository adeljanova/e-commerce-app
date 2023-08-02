import { useState, useEffect } from "react";
import "./Filter.css";
import axios from 'axios';

const Filter = ({ categories, price, onFilterChange }) => {
  // const [categories, setCategories] = useState([]);
  // const [price, setPrice] = useState({ min: 0, max: 0 });

  // useEffect(() => {
  //   axios.get('https://fakestoreapi.com/products/categories')
  //     .then(response => {
  //       setCategories(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching categories:', error);
  //     });

  //   axios.get('https://fakestoreapi.com/products')
  //     .then(response => {
  //       const prices = response.data.map(product => product.price);
  //       setPrice({ min: Math.min(...prices), max: Math.max(...prices) });
  //     })
  //     .catch(error => {
  //       console.error('Error fetching price range:', error);
  //     });
  // }, []);

  const setCategoryHandler = (event) => {
    onFilterChange({category: event.target.value})
  };

  const setPriceHandler = (event) => {
    onFilterChange({category: event.target.value})
  };

  return (
    <div className="filtering-container">
      <fieldset>
        <h3>Filter products</h3>
        <br />
        <h4>Category</h4>
        <select onChange={setCategoryHandler}>
          <option value="">All Categories</option>
          {categories.map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <h4>Price</h4>
        <input
          type="range"
          min={price.min}
          max={price.max}
          step="10"
          onChange={setPriceHandler}
        />
        <p>Min Price: ${price.min}</p>
        <p>Max Price: ${price.max}</p>
      </fieldset>
    </div>
  );
};

export default Filter;
