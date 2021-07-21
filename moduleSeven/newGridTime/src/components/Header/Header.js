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

  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
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
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: revert;
    svg:first-child {
      margin-inline-end: 32px;
    }
  }
`;

const ButtonContainer = styled.div`
  display: none;
  @media ${QUERIES.desktopAndUp} {
    display: revert;

    text-align: center;
    margin-block-start: 24px;
    a {
      display: inline-block;
      margin-block-start: 8px;
      color: var(--color-gray-900);
      font-style: italic;
      font-size: calc(14 / 16 * 1rem);
      border-bottom: 0.8px solid currentColor;
    }
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
  justify-content: center;
  padding-block-start: 4px;
  padding-block-end: 48px;

  @media ${QUERIES.tabletAndUp} {
    padding-block-start: 20px;
    padding-block-end: 72px;
  }

  @media ${QUERIES.desktopAndUp} {
    align-items: center;
    justify-content: space-between;
    margin-top: 0px;
    margin-bottom: 48px;
  }
`;

export default Header;
