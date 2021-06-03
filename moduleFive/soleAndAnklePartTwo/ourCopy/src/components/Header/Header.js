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
        <RightSide />
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
  margin-inline-start: auto;
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
    flex: 1;
    justify-content: space-between;
    gap: clamp(1rem, 4.6vw - 1.5rem, 4rem);
    /* moving the margin left and right with flex: 1 will let our nav bar grow to fit the rest of the header space minus the space of the logo and empty div */
    /* margin: 0px 48px; */
    /* in our MobileMenuIconsContainer component in this module file we want to put margin-inline-start to push that container to the end so it sits on the right */
  }
`;

const Side = styled.div`
  max-width: 275px;
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

const RightSide = styled(Side)`
  max-width: 200px;
`;

export default Header;

/***** josh's solution *****/

import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  const Header = () => {
    <Header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <MobileActions>
          <ShoppingBagButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </ShoppingBagButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="menu" />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>
        <Filler />
      </MainHeader>

      <MobileMenu></MobileMenu>
      </Header>
  }
	const MainHeader = styled.div`
  padding: 18px 32px;
    /* remove the fixed height to remove the vertical scroll bar */
  /* height: 72px; */
  border-bottom: 1px solid ${COLORS.gray[300]};
    overflow: auto;
    
  @media ${QUERIES.tabletAndSmaller} {
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid ${COLORS.gray[900]};
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  /* gap: 48px; */
  /* use clamp with gap declaration for fluid spacing */
  gap: clamp(1rem, 8.1vw - 4rem, 3rem);
  margin: 0px 48px;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const MobileActions = styled.div`
  display: none;
  @media ${QUERIES.tabletAndSmaller} {
    gap: 32px;
    display: flex;
  }
  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const ShoppingBagButton = styled(UnstyledButton)`
  transform: translateX(-2px);
`;

const Filler = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
/***** josh's solution *****/ 