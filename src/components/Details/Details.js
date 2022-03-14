import React from 'react';
import styled from 'styled-components';
import plusIcon from '../../assets/plus-icon.png';
import minusIcon from '../../assets/minus-icon.png';

function Details({ data }) {
  const {
    description,
    dimensions,
    care,
    shipping,
    color,
    material,
    fabricconetent,
    weight,
  } = data;
  return (
    <>
      <Container className={'first'} icon={minusIcon}>
        <Summary>
          <Title>Details</Title>
          <ExpandIcon icon={plusIcon}></ExpandIcon>
        </Summary>
        <Text>{description}</Text>
        <List>
          {shipping && <Item>Ships in: {shipping}</Item>}
          {color && <Item>Color: {color}</Item>}
          {material && <Item>Material: {material}</Item>}
          {fabricconetent && <Item>Fabric content: {fabricconetent}</Item>}
          {dimensions && <Item>Overall dimensions: {dimensions}</Item>}
          {weight && <Item>Total weight: {weight}</Item>}
        </List>
      </Container>
      {/* <Container>
        <Summary>
          <Text>Dimensions</Text>
          <ExpandIcon icon={plusIcon}></ExpandIcon>
        </Summary>
      </Container> */}
      {care && (
        <Container icon={minusIcon}>
          <Summary>
            <Title>Care</Title>

            <ExpandIcon icon={plusIcon}></ExpandIcon>
          </Summary>
          <Text dangerouslySetInnerHTML={{ __html: `<ul>${care}</ul>` }}></Text>
        </Container>
      )}
    </>
  );
}

const Container = styled.details`
  width: 100%;
  height: auto;
  font-family: Poppins;
  font-size: 0.9rem;

  box-shadow: 0 1px rgb(0 0 0 / 10%);
  &.first {
    margin-top: 1rem;
    box-shadow: 0 -1px rgb(0 0 0 / 10%), 0 1px rgb(0 0 0 / 10%);
  }
  &[open] > summary > div {
    ${({ icon }) => `background-image: url(${icon});`}
  }
`;

const Summary = styled.summary`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 3.5rem;
  cursor: pointer;
`;

const ExpandIcon = styled.div`
  height: 24px;
  width: 24px;
  border: 0;
  background-size: contain;
  background-repeat: no-repeat;
  ${({ icon }) => `background-image: url(${icon});`}
`;

const List = styled.ul`
margin: 0 ;
padding: 0.6rem 0 1.5rem 0;
}
`;

const Item = styled.li`

margin: 0 1rem;
}
`;

const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
`;

const Text = styled.div`
  margin: 0;
  display: flex;
  font-family: Poppins;

  flex-direction: column;
  ul {
    text-align: left;
    margin: 0;
    padding: 0.3rem 0 1.5rem 0;
    li {
      margin: 0 1rem;
    }
  }
`;

export default Details;
