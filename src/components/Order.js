import { useContext } from "react";
import styled from "@emotion/styled";
import { TranslationContext } from "../translations/TranslationProvider";
import { Icon } from "./Icon";
import {
  desktop,
  tablet,
  colors,
  VerticalSpace,
  HorizontalSpace,
  icons,
  wideDesktop,
  borderRadius
} from "../DesignSystem";

const OrderBlock = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.dirtyWhite};
  border-radius: ${borderRadius};
  align-items: center;
`;

const HorizontalSpaceTablet = styled(HorizontalSpace)`
  display: none;
  ${tablet} {
    display: block;
  }
`;

const CartIcon = styled(Icon)`
  display: none;
  ${tablet} {
    display: block;
    font-size: 40px;
  }
  ${desktop} {
    font-size: 60px;
  }
`;

const OrderText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

const OrderTitle = styled.h2`
  margin: 0;
  font-size: 21px;
  ${wideDesktop} {
    font-size: 28px;
  }
`;

const OrderParagraph = styled.p`
  margin: 0;
`;

const EmailLink = styled.a`
  color: ${colors.orange};
  :hover {
    text-decoration: none;
  }
`;

const Email = () => (
  <EmailLink href="mailto:matrisseriagatell@gmail.com">
    matrisseriagatell@gmail.com
  </EmailLink>
);

export const Order = () => {
  const t = useContext(TranslationContext);
  return (
    <OrderBlock>
      <HorizontalSpaceTablet value={20} />
      <CartIcon type={icons.shopping_cart} />
      <HorizontalSpace value={20} />
      <OrderText>
        <VerticalSpace value={10} />
        <OrderTitle>{t.product_order_title}</OrderTitle>
        <VerticalSpace value={10} />
        <OrderParagraph>
          {t.product_order}
          <Email />
        </OrderParagraph>
        <VerticalSpace value={10} />
      </OrderText>
      <HorizontalSpace value={20} />
    </OrderBlock>
  );
};
