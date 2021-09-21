import { useContext } from "react";
import styled from "@emotion/styled";
import { TranslationContext } from "../translations/TranslationProvider";
import { colors, fontFamilies, icons, desktop } from "../DesignSystem";
import { Icon } from "./Icon";
import { StyledExternalLink } from "./StyledLink";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  background-color: ${colors.darkGrey};
  padding: 10px 30px 30px 30px;
  ${desktop} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ContactBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: ${fontFamilies.openSans};
  color: white;
  width: 100%;
  ${desktop} {
    width: 400px;
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Divider = styled.hr`
  width: 100%;
`;

const ContactRow = styled.div`
  display: flex;
  align-items: center;
  text-align: left;
  gap: 12px;
  padding: 5px 0;
  margin: 2px 0;
`;

const Address = () => (
  <ContactRow>
    <Icon type={icons.place} />
    <span>
      Carretera del Pla de Santa Maria n°208, nau 2, 43800 Valls, Tarragona
    </span>
  </ContactRow>
);

/*
const Phone = () => (
  <ContactRow>
    <Icon type={icons.call} />
    <span>
      <StyledExternalLink href="tel:977606024">977 60 60 24</StyledExternalLink>
    </span>
  </ContactRow>
);
*/

const Email = () => (
  <ContactRow>
    <Icon type={icons.email} />
    <span>
      <StyledExternalLink href="mailto:socelpapu@matrisseriagatell.cat">
        matrisseriagatell@gmail.com
      </StyledExternalLink>
    </span>
  </ContactRow>
);

const Copyright = styled.span`
  color: white;
  font-size: 14px;
  align-self: flex-end;
  margin-top: 40px;
  ${desktop} {
    margin-top: 0;
  }
`;

const BrandBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  ${desktop} {
    flex-direction: column;
  }
`;

const Logo = styled.img`
  margin-top: 10px;
  width: 170px;
`;

export const Footer = () => {
  const t = useContext(TranslationContext);
  return (
    <FooterContainer>
      <ContactBlock>
        <h3>{t.footer_contact_title}</h3>
        <ContactList>
          <Email />
          <Divider />
          <Address />
        </ContactList>
      </ContactBlock>
      <BrandBlock>
        <Logo src="logo.jpg" />
        <Copyright>Copyright © 2021 Matrisseria Gatell, S.L.</Copyright>
      </BrandBlock>
    </FooterContainer>
  );
};
