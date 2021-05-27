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
        <CloseBtnModal>
          <Icon onClick={onDismiss} id="close" strokeWidth={1} />
        </CloseBtnModal>
        <MobileNav>
          <MobileNavlink href="/sale">Sale</MobileNavlink>
          <MobileNavlink href="/new">New&nbsp;Releases</MobileNavlink>
          <MobileNavlink href="/men">Men</MobileNavlink>
          <MobileNavlink href="/women">Women</MobileNavlink>
          <MobileNavlink href="/kids">Kids</MobileNavlink>
          <MobileNavlink href="/collections">Collections</MobileNavlink>
        </MobileNav>
        <MobileMenuFooter>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/contact">Contact Us</a>
        </MobileMenuFooter>
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
  @media ${QUERIES.tabletAndUp} {
    display: none;
  } ;
`;

/***** getting the hang of composition with styled components, using the styles from UnstyledButton with our closebtnmodal we can add specific styled declaration to this btn *****/
const CloseBtnModal = styled(UnstyledButton)`
  border: 1px solid red;
  width: min-content;
  margin-inline-start: auto;
`;
/***** getting the hang of composition with styled components, using the styles from UnstyledButton with our closebtnmodal we can add specific styled declaration to this btn *****/

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
  top: 0;
  right: 0;
  bottom: 0;
  /* when we had left: 0 or didn't declare a left property declaration and used padding: 32px; the white background covered the whole screen(we lost the opacity black background)
  we had to used left: 75px (pushing 75px from the left) to get our desired look to match the design in figma
  */
  left: 75px;
  padding: 32px;
  padding-inline-end: 22px;
  position: fixed;
  display: flex;
  flex-direction: column;
  border: 1px solid ${COLORS.red};
  /* width: 100%; */
  /* z-index: 1; */
  background-color: ${COLORS.white};
  /* add background color and border around links */
`;

const MobileNav = styled.nav`
  text-align: left;
  font-weight: ${WEIGHTS.medium};
  margin-block-start: auto;
  & > * + * {
    margin-block-start: 22px;
  }
`;
const MobileDismissButton = styled.button``;

const MobileNavlink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  display: block;
  font-size: calc((18 / 16) * 1rem);
  /* padding: 16px; */
  /* border: 1px solid ${COLORS.gray[700]}; */
  &:hover {
    text-decoration: underline;
  }
  &:focus {
    outline-offset: 2px;
    outline: 1px dashed blue;
  }
`;

const MobileMenuFooter = styled.footer`
  margin-block-start: auto;
  font-size: calc((14 / 16) * 1rem);

  & > * {
    display: block;
    text-decoration: none;
    color: ${COLORS.gray[700]};
    &:hover {
      text-decoration: underline;
    }
    /* we want to select all the a that is a child of our footer except the last child
    when we had this declaration outside of & > * {} we were selecting the all footer that is except the footer that is the last child
    */
    &:not(:last-child) {
      margin-block-end: 14px;
    }
  }

  /* gray-700
  font-size: 14px;
  font-weight: normal;
  */
`;

export default MobileMenu;
