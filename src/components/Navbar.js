import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { useContext } from "react";
import { TranslationContext } from "../TranslationProvider";
import { desktop } from "../DesignSystem";

export const navbarHeight = 54;

const Nav = styled.nav`
  position: fixed;
  display: flex;
  width: 100%;
  height: ${navbarHeight}px;
  background-color: #222222;
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

const StyledLink = styled(Link)`
  font-family: "Rubik", sans-serif;
  color: white;
  font-size: 20px;
  line-height: 20px;
  :hover {
    color: #ff5533;
    text-decoration: none;
  }
`;

const Item = styled.li`
  display: ${(props) => (props.hideOnMobile ? "none" : "inline-block")};
  ${desktop} {
    display: inline-block;
  }
`;

const NavLink = ({ text, to, hideOnMobile }) => (
  <Item hideOnMobile={hideOnMobile}>
    <StyledLink to={to}>{text}</StyledLink>
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
          <NavLink to="/" text={t.navbar_home} />
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
