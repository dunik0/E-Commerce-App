import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import closeIcon from '../../assets/x-icon.png';
import Filters from '../ProductList/Filters';
import CartItems from '../CartItems/CartItems';

function SideOverlay({ overlayOffset, toggleOverlayOffset }) {
  const [isFilters, setIsFilters] = useState(false);

  useEffect(() => {
    setIsFilters(overlayOffset === '0' || overlayOffset === '-60%');
  }, [overlayOffset]);

  return (
    <>
      {ReactDOM.createPortal(
        <OverlayBackground
          onClick={() => {
            toggleOverlayOffset('-60%');
          }}
        >
          <Container
            onClick={(e) => e.stopPropagation()}
            offset={overlayOffset}
          >
            <Close
              src={closeIcon}
              onClick={() => {
                toggleOverlayOffset('-60%');
              }}
            />
            {isFilters ? <Filters /> : null}
          </Container>
        </OverlayBackground>,
        document.getElementById('root-overlay'),
      )}
    </>
  );
}

const OverlayBackground = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const Close = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
  margin: 2px;
  margin-left: auto;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  height: 100%;
  overflow: scroll;
  transition: 0.1s;
  width: 60%;
  ${({ offset }) => `  transform: translateX(${offset});
    `}
`;

export default SideOverlay;
