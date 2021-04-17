import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

/***** josh solution *****/

var SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "4px 12px",
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "12px 20px",
  },
  large: {
    "--borderRadius": 2 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "16px 32px",
  },
};

const Button = ({ variant, size, children }) => {
  var styles = SIZES[size];

  let Component;
  if (variant == "fill") {
    Component = FillButton;
  } else {
    Component = OutlineButton;
  }
  return <Component style={styles}>{children}</Component>;
};

var ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:focus {
    outline-color: ${COLORS.primary};
    outline-offset: 4px;
  }
`;

var FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;
var OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;
  &:focus {
    outline-color: gray;
  }

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;
var GhostButton = styled(ButtonBase)`
  &:focus {
    outline-color: gray;
  }
`;

/***** josh solution *****/

const Button = ({ variant, size, children }) => {
  // var styles = SIZES[size];
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
    props.size == "large"
      ? 16 / 16
      : props.size == "medium"
      ? 12 / 16
      : 8 / 16}rem;
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

/*

code from josh codesandbox

import React from "react";
import styled from "styled-components";

import { COLORS } from "./constants";

const SIZES = {
  small: {
    "--borderRadius": 2 + "px",
    "--fontSize": 16 / 16 + "rem",
    "--padding": "4px 12px"
  },
  medium: {
    "--borderRadius": 2 + "px",
    "--fontSize": 18 / 16 + "rem",
    "--padding": "12px 20px"
  },
  large: {
    "--borderRadius": 4 + "px",
    "--fontSize": 21 / 16 + "rem",
    "--padding": "16px 32px"
  }
};

const Button = ({ variant, size, children }) => {
  const styles = SIZES[size];

  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  } else if (variant === "ghost") {
    Component = GhostButton;
  } else {
    throw new Error(`Unrecognized Button variant: ${variant}`);
  }

  return <Component style={styles}>{children}</Component>;
};

const ButtonBase = styled.button`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  padding: var(--padding);
  border-radius: var(--borderRadius);
  border: 2px solid transparent;
  outline-color: ${COLORS.primary};

  &:focus {
    outline-offset: 4px;
  }
`;

const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.primary};
  color: ${COLORS.white};

  &:hover {
    background-color: ${COLORS.primaryLight};
  }
`;
const OutlineButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
  color: ${COLORS.primary};
  border: 2px solid currentColor;

  &:hover {
    background-color: ${COLORS.offwhite};
  }
`;
const GhostButton = styled(ButtonBase)`
  color: ${COLORS.gray};
  background-color: transparent;
  outline-color: ${COLORS.gray};

  &:hover {
    background: ${COLORS.transparentGray15};
    color: ${COLORS.black};
  }
`;

export default Button;


*/
