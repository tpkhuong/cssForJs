import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const Button = ({ variant, size, children }) => {
  return (
    <ButtonWrapper variant={variant} size={size}>
      {children}
    </ButtonWrapper>
  );
};

var ButtonWrapper = styled.button`
  padding: 8px 16px;
  color: ${(props) =>
    props.variant == "ghost"
      ? COLORS.gray
      : props.variant == "fill"
      ? COLORS.white
      : COLORS.primary};
  text-transform: uppercase;
  background-color: ${(props) =>
    props.variant == "ghost"
      ? "transparent"
      : props.variant == "fill"
      ? COLORS.primary
      : COLORS.white};
  border-color: ${(props) =>
    props.variant == "ghost" ? "transparent" : COLORS.primary};
`;

export default Button;
