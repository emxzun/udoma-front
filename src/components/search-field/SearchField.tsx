import React from 'react';

const SearchField = () => {
  return (
      <>
        <div className="search-field">
          <input type="text"/>
          <button>Поиск</button>
        </div>
        <div className="search-field__help-text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </div>
      </>
  );
};

export default SearchField;