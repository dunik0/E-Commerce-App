import React, { PropTypes } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { host, port } from '../../APIConfig.json';
import addToBasketIcon from '../../assets/shopping-basket-add-icon.png';
import heartIcon from '../../assets/heart-icon.png';

const ProductItem = ({ data, width }) => {
  const { title, image, price, id } = data;

  return (
    <Container style={{ width }}>
      <Link style={{ width: width - 25 }} to={`/product/${id}`}>
        <Image
          style={{ width: width - 25 }}
          src={`http://${host}:${port}/${image}`}
        />
        <BottomPanelContainer>
          <TextContainer>
            <Text>{title}</Text>
            <Text> ${price}.00</Text>
          </TextContainer>
          <ButtonContainer>
            <Button src={heartIcon} />
            <Button src={addToBasketIcon} />
          </ButtonContainer>
        </BottomPanelContainer>
      </Link>
    </Container>
  );
};

ProductItem.propTypes = {};

const Image = styled.img`
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
`;

const Link = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-decoration: none;
  color: black;
  font-family: Montserrat;
`;

const TextContainer = styled.span`
  padding-top: 5px;
  width: 85%;
`;

const Text = styled.div`
  padding-top: 5px;
`;

const ButtonContainer = styled.span`
  padding: 5px 5px 0 0;
  display: flex;
  flex-direction: column;
`;

const Button = styled.img`
  padding-top: 5px;
  width: 24px;
  height 24px;
`;

const BottomPanelContainer = styled.span`
  display: flex;
  justify-content: space-between;
`;

export default ProductItem;
