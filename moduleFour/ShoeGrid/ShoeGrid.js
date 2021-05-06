import React from "react";
import styled from "styled-components/macro";

import SHOES from "../../data";
import ShoeCard from "../ShoeCard";

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCard key={shoe.slug} {...shoe} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 28px;
  & > * {
    flex: 1 1 250px;
  }

  & a:last-child {
    flex: 1 1 500px;
  }
`;

/* josh solution */

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
/* put the flex on the container and the image is set to grow and fill the available space */

const ShoeWrapper = styled.div`
  /* width: 275px; use min-width to set a size */
  min-width: 275px;
  max-width: 500px;
  margin-left: 16px;
  margin-right: 16px;
  flex: 1;
  /* use margin: -16px */
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* alternative to using flex gap */
  margin-left: -16px;
  margin-right: -16px;
  /* add margin: margin-left and margin-right on the child and adding negative margin on the parent*/
  /* or using margin: 16px */
  /* alternative to using flex gap */
  gap: 28px;
`;

/* josh solution */

export default ShoeGrid;
