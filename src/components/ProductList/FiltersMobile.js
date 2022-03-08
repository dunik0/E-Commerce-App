import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import optionsIcon from '../../assets/options-icon.png';
import Filters from './Filters';
import closeIcon from '../../assets/x-icon.png';

const FiltersMobile = () => {
  const [isOverlayShown, setIsOverlayShown] = useState(false);
  const [overlayOffset, setOverlayOffset] = useState('-60%');

  useEffect(() => {
    if (isOverlayShown) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'scroll';
  }, [isOverlayShown]);

  const toggleOverlay = () => {
    switch (overlayOffset) {
      case '0':
        setOverlayOffset('-60%');
        setTimeout(() => setIsOverlayShown(false), 50);
        break;
      case '-60%':
        setIsOverlayShown(true);
        setTimeout(() => setOverlayOffset('0'), 1);
        break;
    }
  };

  return (
    <>
      <Button onClick={toggleOverlay}>
        <FlexWrapper>
          <Image src={optionsIcon} />
          <Text>Filter Options</Text>
        </FlexWrapper>
      </Button>
      {isOverlayShown
        ? ReactDOM.createPortal(
            <OverlayBackground onClick={toggleOverlay}>
              <FiltersWrapper
                onClick={(e) => e.stopPropagation()}
                offset={overlayOffset}
              >
                <Close src={closeIcon} onClick={toggleOverlay} />
                <Filters width={overlayOffset} isMobile={true} />
              </FiltersWrapper>
            </OverlayBackground>,
            document.getElementById('root-overlay'),
          )
        : null}
    </>
  );
};

const Button = styled.button`
  background-color: black;
  padding: 0.5rem;
  border: none;
  cursor: pointer;
  width: calc(100% - 30px);
`;

const Image = styled.img`
  width; 20px;
  height: 20px;
`;

const Text = styled.span`
  color: white;
  font-family: Montserrat;
  margin: 0 auto;
`;

const FlexWrapper = styled.span`
  display: flex;
  align-items: center;
`;

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

const FiltersWrapper = styled.div`
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

export default FiltersMobile;
