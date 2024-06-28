// eslint-disable-next-line no-unused-vars
/* eslint-disable react/prop-types */

const FilterButtons = ({ setFilter }) => {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter("All")}>Alle Produkter</button>
      <button onClick={() => setFilter("Under $50")}>Under $50</button>
      <button onClick={() => setFilter("Between $50 and $100")}>
        Mellem $50 og $100
      </button>
      <button onClick={() => setFilter("Above $100")}>Over $100</button>
    </div>
  );
};

export default FilterButtons;
