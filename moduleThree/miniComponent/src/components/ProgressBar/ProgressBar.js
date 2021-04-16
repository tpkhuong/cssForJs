/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';


var SIZES = {
  small: {
    "--padding": "2px",
  },
  medium: {
    "--padding": "4px",
  },
  large: {
    "--padding": "6px"
  }
}

const ProgressBar = ({ value, size }) => {
  var styles = SIZES[size];
  return (
    <>
    <LabelWrapper for="file">{ size }</LabelWrapper>
    <Progress styles={styles} id="file" aria-valuemin="0" aria-valuemax="100" aria-valuenow={`${value}`} ></Progress>;
    </>)
};

var Progress = styled.progress`
 padding: var(--padding) 0;
 border: 2px solid black;
`

var LabelWrapper = styled.label`
  padding-inline-end: 8px;
`

export default ProgressBar;
