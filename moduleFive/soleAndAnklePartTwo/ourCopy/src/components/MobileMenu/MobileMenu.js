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

  return (
    <MobileMenuWrapper>
      <button onClick={onDismiss}>Dismiss menu</button>
      <nav>
        <MobileNavlink href="/sale">Sale</MobileNavlink>
        <MobileNavlink href="/new">New&nbsp;Releases</MobileNavlink>
        <MobileNavlink href="/men">Men</MobileNavlink>
        <MobileNavlink href="/women">Women</MobileNavlink>
        <MobileNavlink href="/kids">Kids</MobileNavlink>
        <MobileNavlink href="/collections">Collections</MobileNavlink>
      </nav>
      <footer>
        <a href="/terms">Terms and Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/contact">Contact Us</a>
      </footer>
    </MobileMenuWrapper>
  );
};

const MobileMenuWrapper = styled.div`
  border: 1px solid ${COLORS.red};
`;

const MobileNav = styled.nav``;
const MobileDismissButton = styled.button``;

const MobileNavlink = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[900]};
  &:hover {
    text-decoration: underline;
  }
`;

const MobileMenuFooter = styled.footer``;

export default MobileMenu;
