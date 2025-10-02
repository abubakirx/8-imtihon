import React from "react";

const RecipeFilters = ({
  options,
  title,
  activeFilters,
  setActiveFilters,
  isOpen,
  setIsOpen,
}) => {
  const togglePanel = () => setIsOpen((prevState) => !prevState);

  const clearFilters = () => {
    setActiveFilters([]);
  };

  const handleFilterChange = (value) => {
    setActiveFilters((prevSelected) => {
      if (prevSelected.includes(value)) {
        return prevSelected.filter((item) => item !== value);
      }
      return [value];
    });
  };

  return (
    <div className="filters__container">
      <button onClick={togglePanel} className="filter__btn">
        <span>{title}</span>
        <img
          width={20}
          height={20}
          src="../assets/images/icon-chevron-down.svg"
          alt="toggle-filters"
        />
      </button>

      {isOpen && (
        <ul className="filter__item-wrapper">
          {options.map((option) => (
            <div className="f__item" key={option.value}>
              <input
                type="checkbox"
                className="filter__checkbox"
                name={option.value}
                value={option.value}
                checked={activeFilters.includes(option.value)}
                onChange={() => handleFilterChange(option.value)}
              />
              {option.label}
            </div>
          ))}
          <button type="button" className="clear__btn" onClick={clearFilters}>
            Clear
          </button>
        </ul>
      )}
    </div>
  );
};

export default RecipeFilters;
