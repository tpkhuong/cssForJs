/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

var STYLES = {
  small: {
    height: 8,
    padding: 0,
    radius: 4,
  },
  medium: {
    height: 12,
  padding: 0,radius: 4},
  large: { height: 16,padding: 4, radius: 8},
}

const ProgressBar = ({ value, size }) => {
  var styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }
  // var height = size == "small" ? 8 : 12;
  return (<Wrapper role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value} style={{"--padding": styles.padding + "px", "--radius": styles.radius + "px"}}>
    <VisuallyHidden>{value}%</VisuallyHidden>
    <BarWrapper>
      <Bar style={{ "--width": value + "%", "--height": styles.height + "px" }} />
      </BarWrapper>
  </Wrapper>);
};

var Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--radius);
  padding: var(--padding);
  `

var BarWrapper = styled.div`
  border-radius: 4px;
  /* trim off corners when progress bar is near full or 98% */
  overflow: hidden;
`

var Bar = styled.div`
width: var(--width);
height: var(--height);
background-color: ${COLORS.primary};
border-radius: 4px 0 0 4px;
`

export default ProgressBar;
