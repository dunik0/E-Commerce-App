import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductsContext from '../../context/ProductsContext';
import FiltersCheckbox from './FiltersCheckbox';

function Filters() {
  const {
    filters: { colors, materials, priceMin, priceMax },
  } = useContext(ProductsContext);

  const colorCheckboxes = colors?.map((color) => (
    <FiltersCheckbox value={color} category={'colors'} key={color} />
  ));

  const materialCheckboxes = materials?.map((material) => (
    <FiltersCheckbox value={material} category={'materials'} key={material} />
  ));

  return (
    <Container>
      <Title>FILTER BY:</Title>
      <Category>
        <CategoryTitle>PRICE:</CategoryTitle>
        {priceMin}
        <input type={'range'} min={priceMin} max={priceMax} />
        {priceMax}
      </Category>
      <Category>
        <CategoryTitle>COLOR:</CategoryTitle>
        {colorCheckboxes}
      </Category>
      <Category>
        <CategoryTitle>MATERIAL:</CategoryTitle>
        {materialCheckboxes}
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

export default Filters;
