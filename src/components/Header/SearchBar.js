import React, { useContext, useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import searchIcon from '../../assets/search-icon.png';
import clearIcon from '../../assets/clear-input-icon.png';
import ProductsContext from '../../context/ProductsContext';

const SearchBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 1000 });
  const { toggleFilter, activeFilters } = useContext(ProductsContext);
  const [searchPhrase, setSearchPhrase] = useState(activeFilters.search);
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    setSearchPhrase('');
  };

  useEffect(() => {
    toggleFilter(searchPhrase, 'search');
  }, [searchPhrase]);

  return (
    <Container onClick={focusInput} isMobile={isMobile}>
      <Icon src={searchIcon} alt="Search" />
      <Input
        type="text"
        ref={inputRef}
        value={searchPhrase}
        onChange={(e) => setSearchPhrase(e.target.value)}
        placeholder={'Search...'}
      />
      <ClearSearch
        src={clearIcon}
        searchPhrase={searchPhrase}
        onClick={searchPhrase ? clearInput : focusInput}
      />
    </Container>
  );
};

const Input = styled.input`
  background: none;
  color: inherit;
  border: none;
  cursor: pointer;
  outline: inherit;
  font-family: Montserrat;
  padding-left: 10px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #f5f5f5;
  cursor: pointer;
  border: 1px solid white;
  &:focus-within {
    border: 1px solid #2b2b2b;
  }
  ${({ isMobile }) =>
    isMobile
      ? `padding: 5px; margin: 5px 30px 5px 30px;`
      : `padding: 5px 0; max-width: 200px;`}
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 5px;
`;

const ClearSearch = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  margin-left: auto;
  ${({ searchPhrase }) => searchPhrase[0] || 'visibility: hidden;'}
`;

export default SearchBar;
