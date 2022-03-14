import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { host, port } from '../../APIConfig.json';
// import addToBasketIcon from '../../assets/shopping-basket-add-icon.png';
import heartIcon from '../../assets/heart-icon.png';
import heartFilledIcon from '../../assets/heart-filled-icon.png';
import CartContext from '../../context/CartContext';
import { useMediaQuery } from 'react-responsive';

const ProductItem = ({ data, isMobile }) => {
  const { title, image, price, id, url, bestseller } = data;
  const isSmallMobile = useMediaQuery({ maxWidth: 400 });
  const { addToLiked, formatPrice, likedItems } = useContext(CartContext);
  const isLiked = likedItems.includes(id);
  return (
    <Container isMobile={isMobile}>
      <NavLink to={`/product/${url}`} state={{ data }}>
        {/* <Image isMobile={isMobile} src={`http://${host}:${port}/${image}`} /> */}
        <Image isMobile={isMobile} src={image} />
      </NavLink>
      <BottomPanelContainer>
        <Link to={`/product/${url}`} state={{ data }}>
          <TextContainer isMobile={isSmallMobile}>
            {bestseller && <SmallText>BESTSELLER</SmallText>}
            <Text>{title}</Text>
            <Text> {formatPrice(price)}</Text>
          </TextContainer>
        </Link>
        <ButtonContainer>
          <Button
            icon={isLiked ? heartFilledIcon : heartIcon}
            onClick={() => addToLiked(id)}
          />
          {/* <Button
            icon={addToBasketIcon}
            onClick={() => toggleCartOverlay(data)}
          /> */}
        </ButtonContainer>
      </BottomPanelContainer>
    </Container>
  );
};

ProductItem.propTypes = {
  data: PropTypes.object.isRequired,
  isLiked: PropTypes.bool,
  isMobile: PropTypes.bool,
};

const Image = styled.img`
  ${({ isMobile }) => (isMobile ? `width: calc(50vw - 40px);` : `width: 100%;`)}
`;

const Container = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 25px;
  font-family: Montserrat;
  ${({ isMobile }) =>
    isMobile
      ? `
    width: calc(50vw - 40px);
    margin: 15px;
    `
      : `
    width: calc(100% / 3 - 20px);
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

const SmallText = styled.div`
  margin-top: 2px;
  color: #3d3d3d;
  font-size: 0.7em;
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
