import { useState } from "react";
import "./Filter.css";
import Products from "../Products/Products";

const Filter = (products = []) => {
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([]);

  //   const categories = products.from(new Set(products.map((p) => p.category)));
  //   const prices = products.from(new Set(products.map((p) => p.price)));

  const setCategoryHandler = () => {
    setCategory();
  };

  const setPriceHandler = () => {
    setPrice();
  };

  return (
    <div className="filtering-container">
      <fieldset>
        <h3>Filter products</h3>
        <br />
        <h4>Category</h4>
        <input
          type="checkbox"
          id={`input-${category}`}
          name={`input-${category}`}
          onChange={setCategoryHandler}
        />
        <label for={`input-${category}`}>Men's clothing</label>
        <br />
        <input
          type="checkbox"
          id={`input-${category}`}
          name={`input-${category}`}
          onChange={setCategoryHandler}
        />
        <label for={`input-${category}`}>Women's clothing</label>
        <br />
        <input
          type="checkbox"
          id={`input-${category}`}
          name={`input-${category}`}
          onChange={setCategoryHandler}
        />
        <label for={`input-${category}`}>Jewelery</label>
        <br />
        <input
          type="checkbox"
          id={`input-${category}`}
          name={`input-${category}`}
          onChange={setCategoryHandler}
        />
        <label for={`input-${category}`}>Electronics</label>
        <br />
        <h4>Price</h4>
        <label for="price">$0</label>
        <input
          type="range"
          id={`input-${price}`}
          name={`input-${price}`}
          min="0"
          max="2000"
          onChange={setPriceHandler}
        />
        <label for={`input-${price}`}>$2000</label>
      </fieldset>
    </div>
  );
};

export default Filter;
