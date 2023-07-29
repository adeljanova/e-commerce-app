const sorting = () => {};

const Sort = () => {
  return (
    <div>
      <form action="#">
        <label htmlFor="sort">
          <select name="sort" id="sort" >
            <option value="lowest">Price(low to high)</option>
            <option value="lowest">Price(high to low)</option>
            <option value="lowest">Price(a to z)</option>
            <option value="lowest">Price(z to a)</option>
          </select>
        </label>
      </form>
    </div>
  );
};

export default Sort;
