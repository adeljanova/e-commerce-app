import "./Sort.css"

const Sort = ({ onSortChange }) => {
  const sortChangeHandler = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sorting-container">
      <form action="#">
        <label htmlFor="sort">
          <select onChange={sortChangeHandler} >
            <option value="asc">Price(low to high)</option>
            <option value="desc">Price(high to low)</option>
            <option value="az">Price(a to z)</option>
            <option value="za">Price(z to a)</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Sort;
