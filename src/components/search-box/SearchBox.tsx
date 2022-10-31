import React, { Component } from 'react';
import './search-box.styles.css';

interface SearchBoxProps {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className: string;
}
export const SearchBox: React.FC<SearchBoxProps> = (props) => {
  const { onChangeHandler, placeholder, className } = props;

  return (
    <div>
      <input
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};
