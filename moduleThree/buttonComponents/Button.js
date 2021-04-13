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
  display: block;
  /* padding: 8px 16px; */
  font-size: ${(props) =>
    props.size == "large" ? "16px" : props.size == "medium" ? "12px" : "8px"};
  padding: ${(props) =>
    props.size == "large"
      ? "10px 18px"
      : props.size == "medium"
      ? "8px 16px"
      : "6px 10px"};
  font-weight: 700;
  border-radius: 5px;
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

  &:hover {
    color: ${(props) =>
      props.variant == "ghost"
        ? COLORS.black
        : props.variant == "fill"
        ? COLORS.white
        : COLORS.primary};
    background-color: ${(props) =>
      props.variant == "ghost"
        ? COLORS.transparentGray75
        : props.variant == "fill"
        ? COLORS.primary
        : COLORS.white};
  }
  &:focus {
    outline: 1px solid;
    outline-color: ${(props) =>
      props.variant == "ghost"
        ? COLORS.transparentGray75
        : props.variant == "fill"
        ? COLORS.white
        : COLORS.primary};
    outline-offset: 1px;
    border-color: ${(props) =>
      props.variant == "ghost"
        ? COLORS.transparentGray75
        : props.variant == "fill"
        ? COLORS.white
        : COLORS.primary};
  }
`;

/*
large:
height: 65px;
width: 152px;
left: 953px;
top: 152px;
border-radius: 4px;

medium:
height: 53px;
width: 117px;
left: 1206px;
top: 152px;
border-radius: 2px;

small:
height: 35px;
width: 93px;
left: 1423px;
top: 152px;
border-radius: 2px;

*/

export default Button;
