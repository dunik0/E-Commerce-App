import React, { PropTypes, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { host, port } from '../../APIConfig.json';
import addToBasketIcon from '../../assets/shopping-basket-add-icon.png';
import heartIcon from '../../assets/heart-icon.png';
import heartFilledIcon from '../../assets/heart-filled-icon.png';
import CartContext from '../../context/CartContext';
import { useMediaQuery } from 'react-responsive';

const ProductItem = ({ data, width, isLiked }) => {
  const { title, image, price, id } = data;
  const isMobile = useMediaQuery({ maxWidth: 400 });
  const { toggleCartOverlay, addToLiked } = useContext(CartContext);

  return (
    <Container style={{ width }}>
      <NavLink to={`/product/${id}`}>
        <Image style={{ width }} src={`http://${host}:${port}/${image}`} />
      </NavLink>
      <BottomPanelContainer>
        <Link to={`/product/${id}`}>
          <TextContainer style={{ fontSize: isMobile ? '0.8rem' : '1rem' }}>
            <Text>{title}</Text>
            <Text> ${price}.00</Text>
          </TextContainer>
        </Link>
        <ButtonContainer>
          <Button
            src={isLiked ? heartFilledIcon : heartIcon}
            onClick={() => addToLiked(id)}
          />
          <Button
            src={addToBasketIcon}
            onClick={() => toggleCartOverlay(data)}
          />
        </ButtonContainer>
      </BottomPanelContainer>
    </Container>
  );
};

ProductItem.propTypes = {};

const Image = styled.img`
  max-width: 450px;
`;

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  padding: 0 10px 0 10px;
  max-width: 450px;
`;

const Link = styled(NavLink)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  text-decoration: none;
  color: black;
  font-family: Montserrat;
  width: 100%;
`;

const TextContainer = styled.span`
  padding-top: 5px;
  width: 100%;
`;

const Text = styled.div`
  padding-top: 5px;
`;

const ButtonContainer = styled.span`
  padding-right: 5px;
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
  width: 100%;
`;

export default ProductItem;
