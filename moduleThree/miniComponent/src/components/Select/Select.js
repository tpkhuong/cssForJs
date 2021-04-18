import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationBit>
        {displayedValue}
        <IconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id="chevron-down" strokeWidth={1} size={24} />
        </IconWrapper>
      </PresentationBit>
    </Wrapper>
  );
};

var Wrapper = styled.div`
  position: relative;
  width: max-content;
  /* using z-index on its children */
  /* isolation: isolate; */
  /* using z-index on its children */
`;

var NativeSelect = styled.select`
  position: absolute;
  /* using z-index with its parent Wrapper */
  /* z-index: 2; */
  /* using z-index with its parent Wrapper */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

var PresentationBit = styled.div`
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  padding: 52px;
  border-radius: 8px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: hsl(0deg, 0%, 0%);
  }
`;

var IconWrapper = styled.div`
  position: absolute;
  /* using z-index with its parent Wrapper */
  /* z-index: 1; */
  /* using z-index with its parent Wrapper */
  top: 0;
  right: 10px;
  bottom: 0;
  left: 0;
  margin: auto;
  width: var(--size);
  height: var(--size);
  /* without using z-index */
  pointer-events: none;
  /* without using z-index */
`;

export default Select;
