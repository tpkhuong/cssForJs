import React from "react";
import styled from "styled-components/macro";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <IconContainer>
          <Search size={24} />
          <Menu size={24} />
        </IconContainer>
        <Logo />
        <ButtonContainer>
          <SubscribeButton>Subscribe</SubscribeButton>
          <a href="#">Already a subscriber?</a>
        </ButtonContainer>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

// we will add to element to MainHeader one before the Logo and one after Logo

const IconContainer = styled.div`
  svg:first-child {
    margin-inline-end: 32px;
  }
`;

const ButtonContainer = styled.div`
  a {
    color: var(--color-gray-900);
    font-style: italic;
    font-size: calc(14 / 16 * 1rem);
  }
`;

const SubscribeButton = styled.button`
  text-transform: uppercase;
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: 12px 24px;
  border-radius: 4px;
  font-weight: var(--font-weight-bold);
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
  margin-bottom: 48px;
`;

export default Header;
