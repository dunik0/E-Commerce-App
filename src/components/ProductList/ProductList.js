import React from 'react';
import styled from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import ProductItem from './ProductItem';

const ProductList = (props) => {
  const { products } = props;

  const { width } = useWindowDimensions();

  const productItems = products.map?.((item) => (
    <ProductItem data={item} width={width / 2 - 10} />
  ));
  console.log(products);
  return <Container>{productItems}</Container>;
};

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

export default ProductList;
