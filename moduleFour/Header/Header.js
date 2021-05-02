import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Logo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  padding: 20px 32px;
  padding-inline-end: 96px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  align-items: baseline;
`;

const Nav = styled.nav`
  margin-inline: auto;
  display: flex;
  flex: 0 1 700px;
  & > * + * {
    margin-inline-start: auto;
  }
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

/* josh soluion */

const Header = () => {
  // Our site features two visual headers, but they should be
  // grouped semantically as a single header.
  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Side>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
        </Side>
      </MainHeader>
    </header>
  );
};

const MainHeader = styled.div`
  /* padding: 20px 32px;
  padding-inline-end: 96px; */
  /* using padding to center */
  padding: 18px 32px;
  /* using padding to center */
  border-bottom: 1px solid ${COLORS.gray[300]};
  display: flex;
  height: 72px;
  align-items: baseline;
`;

const Side = styled.div`
  flex: 1;
`;

const Nav = styled.nav`
  /* margin-inline: auto; */
  display: flex;
  gap: 48px;
  margin: 0px 48px;
  /* flex: 0 1 700px;
  & > * + * {
    margin-inline-start: auto;
  } */
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

/* josh soluion */
