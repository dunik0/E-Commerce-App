import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductsContext from '../../context/ProductsContext';
import FiltersCheckbox from './FiltersCheckbox';
import { Range } from 'react-range';

function Filters({ isMobile }) {
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
    <Container isMobile={isMobile}>
      <Title>FILTER BY:</Title>
      <Category>
        <CategoryTitle>PRICE:</CategoryTitle>
        <RangePicker>
          <Price>${priceRange[0]}</Price>
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
          <Price>${priceRange[1]}</Price>
        </RangePicker>
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
        <Select value={sortBy} onChange={(e) => changeSorting(e.target.value)}>
          <option value="title asc">Title A-Z </option>
          <option value="title desc">Title Z-A</option>
          <option value="price asc">Price low to high</option>
          <option value="price desc">Price high to low</option>
        </Select>
      </Category>
    </Container>
  );
}

const Container = styled.div`
  font-family: Poppins;
  margin: 0 10px;
  ${({ isMobile }) => (isMobile ? 'width: 95%' : 'width: min(25%, 250px)')}
`;

const Title = styled.h2`
  margin: 5px 0 0 0;
`;

const CategoryTitle = styled.h3`
  padding-top: 10px;
  box-shadow: 0 -1px rgb(0 0 0 / 5%);
`;

const Category = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const RangePicker = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`;

const RangeTrack = styled.div`
  height: 6px;
  width: 80%;
  margin: 0 10px;
  background-color: #ccc;
`;

const RangeThumb = styled.div`
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: #999;
`;

const Price = styled.div`
  min-width: 40px;
  text-align: center;
`;

const Select = styled.select`
  font-family: Poppins;
`;

export default Filters;
