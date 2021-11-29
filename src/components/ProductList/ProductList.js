import React, { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../context/CartContext';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  const { products } = props;

  const { likedItems } = useContext(CartContext);

  const { width } = useWindowDimensions();

  const productItems = products.map?.((item) => (
    <ProductItem
      data={item}
      width={width / 2 - 30}
      key={item.id}
      isLiked={likedItems.includes(item.id)}
    />
  ));
  return <Container>{productItems}</Container>;
};

const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0 8px 0 8px;
  width: min(980px, 100%);
`;

export default ProductList;
