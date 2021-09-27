import { useContext, useEffect } from "react";
import styled from "@emotion/styled";
import { TranslationContext } from "../translations/TranslationProvider";
import { PriceTable } from "./PriceTable";
import { Icon } from "./Icon";
import {
  desktop,
  colors,
  Column,
  fontFamilies,
  VerticalSpace,
  HorizontalSpace,
  icons,
  wideDesktop
} from "../DesignSystem";
import { Order } from "./Order";

const ContainerCard = styled.div`
  background-color: ${colors.white};
  padding: 20px;
`;

const ProductSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  ${desktop} {
    align-items: flex-start;
    flex-direction: row;
  }
`;

const ProductImage = styled.img`
  object-fit: contain;
  max-width: 100%;
  ${desktop} {
    max-width: 50%;
  }
`;

const Summary = styled(Column)`
  align-items: flex-start;
  width: 95%;
  ${desktop} {
    width: 50%;
  }
`;

const ProductName = styled.h1`
  text-align: left;
  font-family: ${fontFamilies.rubik};
  font-size: 32px;
  ${desktop} {
    font-size: 24px;
  }
  ${wideDesktop} {
    font-size: 32px;
  }
`;

const Pill = styled.span`
  display: block;
  background-color: ${colors.orange};
  border-radius: 5px;
  padding: 4px 9px;
  color: ${colors.white};
  font-family: ${fontFamilies.rubik};
  font-size: 16px;
`;

const ShippingIncluded = styled.div`
  display: flex;
`;

const ShippingIncludedText = styled.span`
  font-family: ${fontFamilies.openSans};
  font-size: 18px;
  font-weight: bold;
  text-align: left;
  margin: 0;
`;

const ShippingExtra = styled(ShippingIncluded)`
  font-size: 16px;
  font-weight: normal;
  text-align: left;
  padding-left: 36px;
`;

const PriceObservation = styled.p`
  background-color: ${colors.dirtyWhite};
  margin: 0;
  padding: 4px 9px;
  font-family: ${fontFamilies.openSans};
  font-weight: bold;
`;

const PriceCalculator = () => null;

export const SectionTitle = styled.h2`
  font-family: ${fontFamilies.rubik};
  text-align: left;
`;

export const SectionText = styled.p`
  font-family: ${fontFamilies.openSans};
  text-align: left;
`;

export const ProductPage = ({ name, priceData, image, children }) => {
  const t = useContext(TranslationContext);
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Column>
      <VerticalSpace value={30} />
      <ContainerCard>
        <ProductSummary>
          <ProductImage alt={name} src={image} />
          <Summary>
            <ProductName>{name}</ProductName>
            <Pill>{t.product_manufacturer}</Pill>
            <VerticalSpace value={20} />
            <PriceTable
              priceData={priceData}
              unitsTitle={t.product_units_title}
              priceTitle={t.product_prices_title}
              locale={t.locale}
            />
            <VerticalSpace value={20} />
            <ShippingIncluded>
              <Icon type={icons.local_shipping} size={28} />
              <HorizontalSpace value={10} />
              <ShippingIncludedText>
                {t.product_shipping_included}*
              </ShippingIncludedText>
            </ShippingIncluded>
            <VerticalSpace value={15} />
            <ShippingExtra>(*) {t.product_shipping_extra}</ShippingExtra>
            <VerticalSpace value={15} />
            <PriceObservation>{t.product_end_stock}</PriceObservation>
            <PriceCalculator />
          </Summary>
        </ProductSummary>
        <VerticalSpace value={20} />
        <Order />
      </ContainerCard>
      <VerticalSpace value={30} />
      <ContainerCard>{children}</ContainerCard>
    </Column>
  );
};
