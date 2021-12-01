import React, { PropTypes, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { host, port } from '../../APIConfig.json';
import addToBasketIcon from '../../assets/shopping-basket-add-icon.png';
import heartIcon from '../../assets/heart-icon.png';
import heartFilledIcon from '../../assets/heart-filled-icon.png';
import CartContext from '../../context/CartContext';
import { useMediaQuery } from 'react-responsive';

const ProductItem = ({ data, isLiked, isMobile }) => {
  const { title, image, price, id } = data;
  const isSmallMobile = useMediaQuery({ maxWidth: 400 });
  const { toggleCartOverlay, addToLiked, formatPrice } =
    useContext(CartContext);

  return (
    <Container isMobile={isMobile}>
      <NavLink to={`/product/${id}`}>
        <Image isMobile={isMobile} src={`http://${host}:${port}/${image}`} />
      </NavLink>
      <BottomPanelContainer>
        <Link to={`/product/${id}`}>
          <TextContainer isMobile={isSmallMobile}>
            <Text>{title}</Text>
            <Text> {formatPrice(price)}</Text>
          </TextContainer>
        </Link>
        <ButtonContainer>
          <Button
            icon={isLiked ? heartFilledIcon : heartIcon}
            onClick={() => addToLiked(id)}
          />
          <Button
            icon={addToBasketIcon}
            onClick={() => toggleCartOverlay(data)}
          />
        </ButtonContainer>
      </BottomPanelContainer>
    </Container>
  );
};

ProductItem.propTypes = {};

const Image = styled.img`
  ${({ isMobile }) => (isMobile ? `width: calc(50vw - 40px);` : `width: 100%;`)}
`;

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  ${({ isMobile }) =>
    isMobile
      ? `
    width: calc(50vw - 40px);
    margin: 15px;
    `
      : `
    width: 30%;
    margin: 10px
    `}
}
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

const TextContainer = styled.div`
  dislpay: flex;
  flex-direction: column;
  ${({ isMobile }) => (isMobile ? `font-size: 0.8rem;` : `font-size: 1rem;`)}
`;

const Text = styled.div`
  margin-top: 2px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  padding-top: 5px;
  width: 24px;
  height 24px;
  cursor: pointer;
  border: none;
  background: none;
  background-size: contain;
  ${({ icon }) => `background-image: url(${icon});`}
`;

const BottomPanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export default ProductItem;
