import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Side />
        <MobileMenuIconsContainer>
          <UnstyledButton>
            <Icon color={`${COLORS.black}`} id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon color={`${COLORS.black}`} id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon color={`${COLORS.black}`} id="menu" strokeWidth={1} />
          </UnstyledButton>
        </MobileMenuIconsContainer>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MobileMenuIconsContainer = styled.div`
  border: 1px solid red;
  display: flex;
  align-self: stretch;
  align-items: center;
  /* since this flex container is also a flex item we can use the flex short hand set restriction on the width using min-width and max-width */
  /* min-width: 5rem;
  max-width: 8rem;
  justify-content: space-between;
  flex: 1; */
  /* since this flex container is also a flex item we can use the flex short hand set restriction on the width using min-width and max-width */

  /* or we can use clamp on gap property  */
  gap: clamp(1.5rem, 1rem, 2rem);
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const Nav = styled.nav`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: flex;
    gap: 48px;
    margin: 0px 48px;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
