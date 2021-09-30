import React from "react";

import IconArrow from '../../images/icon-arrow.svg'

// Styles
import './SearchBar.style.scss';

const SearchBar = () => {
  return (
    <div>
      <div className="searchbar__box">
        <input
          className="searchbar__input"
          type="text"
          name="search"
        />
        <button className="searchbar__button" type="submit">
          <img src={IconArrow} alt="logo arrow" />
        </button>
      </div>

    </div>
  )
}

export default SearchBar;