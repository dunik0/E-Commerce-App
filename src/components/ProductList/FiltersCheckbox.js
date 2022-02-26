import React, { useContext } from 'react';
import styled from 'styled-components';
import ProductsContext from '../../context/ProductsContext';

function FiltersCheckbox({ value, category }) {
  const { activeFilters, toggleFilter } = useContext(ProductsContext);

  return (
    <Container>
      <label>
        <input
          type={'checkbox'}
          onChange={toggleFilter.bind(null, value, category)}
          checked={activeFilters[category].includes(value) ? 'checked' : ''}
        />
        {value}
      </label>
    </Container>
  );
}

const Container = styled.li``;

export default FiltersCheckbox;
