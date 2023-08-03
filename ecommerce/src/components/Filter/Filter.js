import "./Filter.css";

const Filter = ({ categories, price, onFilterChange }) => {
  const setCategoryHandler = (event) => {
    onFilterChange({ category: event.target.value });
  };

  const setPriceHandler = (event) => {
    onFilterChange({ category: event.target.value });
  };

  return (
    <div className="filtering-container">
      <fieldset>
        <h3>Filter products</h3>
        <br />
        <h4>Category</h4>
        <select onChange={setCategoryHandler}>
          <option value="">All Categories</option>
          {categories.map((category) => (
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
