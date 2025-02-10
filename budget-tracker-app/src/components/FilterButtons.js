import React from 'react';
import './FilterButtons.css';

function FilterButtons({ onFilter }) {
  return (
    <div className="filter-buttons-container">
      <button onClick={() => onFilter('all')} className="filter-buttons-button">All</button>
      <button onClick={() => onFilter('income')} className="filter-buttons-button">Income</button>
      <button onClick={() => onFilter('expense')} className="filter-buttons-button">Expense</button>
    </div>
  );
}

export default FilterButtons;