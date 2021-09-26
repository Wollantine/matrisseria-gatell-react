import styled from "@emotion/styled";
import { useContext } from "react";
import { TranslationContext } from "../translations/TranslationProvider";
import {
  desktop,
  colors,
  HorizontalSpace,
  fontFamilies
} from "../DesignSystem";
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
  gap: 15px;
  margin: 0;
  ${resetUlStyles}
`;

const StyledNavLink = styled(StyledLink)`
  font-family: ${fontFamilies.rubik};
  font-size: 20px;
  line-height: 20px;
`;

const HomeLink = styled(StyledLink)`
  font-family: ${fontFamilies.workSans};
  font-size: 20px;
  line-height: 20px;
  text-decoration: none;
  font-weight: bold;
`;

const Item = styled.li`
  display: ${(props) => (props.hideOnMobile ? "none" : "flex")};
  align-items: center;
  padding: 0 15px;
  height: 54px;
  ${desktop} {
    display: flex;
  }
`;

const NavLink = ({ text, to, hideOnMobile }) => (
  <StyledNavLink to={to}>
    <Item hideOnMobile={hideOnMobile}>{text}</Item>
  </StyledNavLink>
);

const HeaderLogo = styled.img`
  height: 44px;
`;

const HomeNavLink = ({ text, to }) => (
  <HomeLink to={to}>
    <Item>
      <HeaderLogo src="/logo_dark_no_text.jpg" />
      <HorizontalSpace value={10} />
      {text}
    </Item>
  </HomeLink>
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
          <HomeNavLink to="./" text={t.navbar_home} />
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
