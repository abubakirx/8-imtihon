import React from "react";

const FilterPanel = ({ options, title, active, setActive, isOpen, setIsOpen }) => {
  const clear = () => setActive([]);
  return (
    <div className="filters__container">
      <button className="filter__btn" onClick={() => setIsOpen(!isOpen)}>
        <span>{title}</span>
      </button>
      {isOpen && (
        <ul className="filter__item-wrapper">
          {options.map((o) => (
            <li className="f__item" key={o.value}>
              <input
                type="checkbox"
                value={o.value}
                checked={active.includes(o.value)}
                onChange={() =>
                  setActive((prev) =>
                    prev.includes(o.value)
                      ? prev.filter((v) => v !== o.value)
                      : [o.value]
                  )
                }
              />
              {o.label}
            </li>
          ))}
          <button className="clear__btn" onClick={clear}>Clear</button>
        </ul>
      )}
    </div>
  );
};

export default FilterPanel;
