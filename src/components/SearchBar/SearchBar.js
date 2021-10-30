import React, { useEffect, useState, useRef } from "react";
import fetchIpGeo from '../../API';

import IconArrow from '../../images/icon-arrow.svg'

// Styles
import './SearchBar.style.scss';

const SearchBar = ({ onQueryIp }) => {

  let textInput = React.createRef();

  const handleClick = () => {
    onQueryIp(textInput.current.value)
  }

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()} className="searchbar__box">
        <input
          className="searchbar__input"
          type="text"
          name="search"
          ref={textInput}
          placeholder="Search for Ip Address..."
        />
        <button className="searchbar__button" type="submit" onClick={handleClick}>
          <img src={IconArrow} alt="logo arrow" />
        </button>
      </form>

    </div>
  )
}

export default SearchBar;