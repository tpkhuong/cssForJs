/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }
  // add accessibility attributes for modal
  return (
    <ModalBackdrop>
      <MobileMenuWrapper
        aria-modal="true"
        role="modal"
        id="dialog1"
        aria-labelledby="dialog1-label"
      >
        <ModalTitle id="dialog1-label">Navigation Menu</ModalTitle>
        {/* <button onClick={onDismiss}>Dismiss menu</button> */}
        <UnstyledButton>
          <Icon onClick={onDismiss} id="close" strokeWidth={1} />
        </UnstyledButton>
        <MobileNav>
          <MobileNavlink href="/sale">Sale</MobileNavlink>
          <MobileNavlink href="/new">New&nbsp;Releases</MobileNavlink>
          <MobileNavlink href="/men">Men</MobileNavlink>
          <MobileNavlink href="/women">Women</MobileNavlink>
          <MobileNavlink href="/kids">Kids</MobileNavlink>
          <MobileNavlink href="/collections">Collections</MobileNavlink>
        </MobileNav>
        <footer>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </footer>
      </MobileMenuWrapper>
    </ModalBackdrop>
  );
};

const ModalBackdrop = styled.div`
  position: fixed;
  background-color: hsla(0, 0%, 20%, 0.9);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
`;

const ModalTitle = styled.span`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

const MobileMenuWrapper = styled.div`
  position: fixed;
  border: 1px solid ${COLORS.red};
  /* width: 100%; */
  /* z-index: 1; */
  background-color: ${COLORS.white};
  /* add background color and border around links */
`;

const MobileNav = styled.nav`
  text-align: center;
  font-weight: ${WEIGHTS.bold};
`;
const MobileDismissButton = styled.button``;

const MobileNavlink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  display: block;
  padding: 16px;
  /* border: 1px solid ${COLORS.gray[700]}; */
  &:hover {
    text-decoration: underline;
  }
`;

const MobileMenuFooter = styled.footer``;

export default MobileMenu;
