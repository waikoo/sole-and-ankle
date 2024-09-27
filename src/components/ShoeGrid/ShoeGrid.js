import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeWrapper key={shoe.slug}>
          <ShoeCard {...shoe} />
        </ShoeWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  // flex: 0 0 360px;
  gap: 36px;
  width: 100%;
  justify-content: space-evenly;
`;

const ShoeWrapper = styled.div`
  max-width: 300px;
`;

export default ShoeGrid;
