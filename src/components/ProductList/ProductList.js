import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
import FiltersMobile from './FiltersMobile';
import ProductItem from './ProductItem';
import Filters from './Filters';
import ProductsContext from '../../context/ProductsContext';
import ProductsPlaceholder from './ProductsPlaceholder';

const ProductList = ({ products }) => {
  const { likedItems } = useContext(CartContext);
  const { isLoading } = useContext(ProductsContext);
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
      {isMobile ? <FiltersMobile /> : <Filters isMobile={false} />}
      <ListContainer isMobile={isMobile}>{productItems}</ListContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;

  ${({ isMobile }) =>
    isMobile
      ? `
    flex-direction: column;
  align-items: center;
    width: calc(100% - 20px);
    padding: 0 10px 0 10px;
    margin-top: 25px;`
      : `
    flex-direction: row;
    width: 100%;
    margin-top: 10px;`}
`;

const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  ${({ isMobile }) => (isMobile ? 'width: 100%;' : 'width: max(75%, 100%)')}
`;

ProductList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default ProductList;
