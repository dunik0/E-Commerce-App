import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductsContext from '../../context/ProductsContext';
import FiltersCheckbox from './FiltersCheckbox';
import { Range } from 'react-range';

function Filters() {
  const {
    filters: { colors, materials, priceMin, priceMax },
    toggleFilter,
    activeFilters,
    sortBy,
    changeSorting,
  } = useContext(ProductsContext);
  const [priceRange, setPriceRange] = useState([
    activeFilters.priceMin || priceMin,
    activeFilters.priceMax || priceMax,
  ]);

  const colorCheckboxes = colors?.map((color) => (
    <FiltersCheckbox value={color} category={'colors'} key={color} />
  ));

  const materialCheckboxes = materials?.map((material) => (
    <FiltersCheckbox value={material} category={'materials'} key={material} />
  ));

  useEffect(() => {
    toggleFilter(priceRange, 'price');
  }, [priceRange]);

  return (
    <Container>
      <Title>FILTER BY:</Title>
      <Category>
        <CategoryTitle>PRICE:</CategoryTitle>
        {priceRange[0]}
        <Range
          max={priceMax}
          min={priceMin}
          values={priceRange}
          onChange={(value) => setPriceRange(value)}
          renderTrack={({ props, children }) => (
            <RangeTrack {...props}>{children}</RangeTrack>
          )}
          renderThumb={({ props }) => <RangeThumb {...props} />}
        />
        {priceRange[1]}
      </Category>
      <Category>
        <CategoryTitle>COLOR:</CategoryTitle>
        {colorCheckboxes}
      </Category>
      <Category>
        <CategoryTitle>MATERIAL:</CategoryTitle>
        {materialCheckboxes}
      </Category>
      <Category>
        <CategoryTitle>SORT BY:</CategoryTitle>
        <select value={sortBy} onChange={(e) => changeSorting(e.target.value)}>
          <option value="title asc">Title A-Z </option>
          <option value="title desc">Title Z-A</option>
          <option value="price asc">Price low to high</option>
          <option value="price desc">Price high to low</option>
        </select>
      </Category>
    </Container>
  );
}

const Container = styled.div`
  font-family: Montserrat;
`;

const Title = styled.h2`
  margin: 0;
`;

const CategoryTitle = styled.h3``;

const Category = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RangeTrack = styled.div`
  height: 6px;
  width: 80%;
  background-color: #ccc;
`;

const RangeThumb = styled.div`
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #999;
`;

export default Filters;
