import "./Sort.css"

const Sort = () => {
  return (
    <div className="sorting-container">
      <form action="#">
        <label htmlFor="sort">
          <select name="sort" id="sort" >
            <option value="lowest">Price(low to high)</option>
            <option value="highes">Price(high to low)</option>
            <option value="az">Price(a to z)</option>
            <option value="za">Price(z to a)</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Sort;
