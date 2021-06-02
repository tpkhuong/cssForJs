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