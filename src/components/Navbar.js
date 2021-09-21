import styled from "@emotion/styled";
import { useContext } from "react";
import { TranslationContext } from "../translations/TranslationProvider";
import { desktop, colors } from "../DesignSystem";
import { StyledLink } from "./StyledLink";

export const navbarHeight = 54;

const Nav = styled.nav`
  position: fixed;
  z-index: 1;
  display: flex;
  width: 100%;
  height: ${navbarHeight}px;
  background-color: ${colors.darkGrey};
  justify-content: center;
`;

const NavbarCenter = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const resetUlStyles = `
  list-style: none;
  padding-inline-start: 0;
  padding-inline-end: 0;
`;

const LinkList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  ${resetUlStyles}
`;

const StyledNavLink = styled(StyledLink)`
  font-family: "Rubik", sans-serif;
  font-size: 20px;
  line-height: 20px;
`;

const Item = styled.li`
  display: ${(props) => (props.hideOnMobile ? "none" : "inline-block")};
  ${desktop} {
    display: inline-block;
  }
`;

const NavLink = ({ text, to, hideOnMobile }) => (
  <Item hideOnMobile={hideOnMobile}>
    <StyledNavLink to={to}>{text}</StyledNavLink>
  </Item>
);

const LanguageSelector = styled.ul`
  display: flex;
  align-items: center;
  margin: 0;
  height: 54px;
  gap: 20px;
  ${resetUlStyles}
`;

export const Navbar = () => {
  const t = useContext(TranslationContext);
  return (
    <Nav>
      <NavbarCenter>
        <LinkList>
          <NavLink to="./" text={t.navbar_home} />
          <NavLink to="products" text={t.navbar_products} hideOnMobile />
        </LinkList>
        <LanguageSelector>
          <NavLink
            to={t.navbar_change_language_link}
            text={t.navbar_change_language}
          />
        </LanguageSelector>
      </NavbarCenter>
    </Nav>
  );
};
