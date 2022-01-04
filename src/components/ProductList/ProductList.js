import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
import Filters from './Filters';
import ProductItem from './ProductItem';

const ProductList = ({ products }) => {
  const { likedItems } = useContext(CartContext);
  const isMobile = useMediaQuery({ maxWidth: 700 });

  const productItems = products.map?.((item) => (
    <ProductItem
      data={item}
      key={item.id}
      isMobile={isMobile}
      isLiked={likedItems.includes(item.id)}
    />
  ));
  return (
    <Container isMobile={isMobile}>
      <Filters isMobile={isMobile} />
      <ListContainer isMobile={isMobile}>{productItems}</ListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  ${({ isMobile }) =>
    isMobile ? `flex-direction: column;` : `flex-direction: row;`}
`;

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;

  ${({ isMobile }) =>
    isMobile
      ? `
  width: calc(100% - 20px);
  padding: 0 10px 0 10px;
    `
      : `
  width: 100;
    `}
`;

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
