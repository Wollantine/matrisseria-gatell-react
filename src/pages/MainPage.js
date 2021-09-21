import { useContext } from "react";
import {
  TranslationContext,
  useLanguage
} from "../translations/TranslationProvider";
import styled from "@emotion/styled";
import { ProductCard } from "../components/ProductCard";
import { ProductCardList } from "../components/ProductCardList";
import { StrengthCardList } from "../components/StrengthCardList";
import { fontFamilies, icons, VerticalSpace } from "../DesignSystem";
import { StrengthCard } from "../components/StrengthCard";

const StrengthsSection = () => {
  const t = useContext(TranslationContext);
  return (
    <StrengthCardList>
      <StrengthCard
        icon={icons.try}
        title={t.main_custom_title}
        text={t.main_custom_text}
      />
      <StrengthCard
        icon={icons.double_arrow}
        title={t.main_manufacturer_title}
        text={t.main_manufacturer_text}
      />
      <StrengthCard
        icon={icons.explore}
        title={t.main_distribution_title}
        text={t.main_distribution_text}
      />
    </StrengthCardList>
  );
};

const SectionTitle = styled.h2`
  font-family: ${fontFamilies.rubik};
  margin-top: 30px;
`;

export const ProductsSection = ({ standalone }) => {
  console.log(standalone);
  const t = useContext(TranslationContext);
  const lang = useLanguage();
  const languageRoute = lang === "es" ? "es/" : "";
  const relativeLink = (product) =>
    standalone ? `${product}` : `/${languageRoute}products/${product}`;
  console.log(relativeLink("pala90"));
  return (
    <div id="products">
      <SectionTitle>{t.main_products}</SectionTitle>
      <ProductCardList>
        <ProductCard
          name={t.pala90_name}
          price={t.pala90_price}
          image="/pala90.jpg"
          link={relativeLink("pala90")}
        />
        <ProductCard
          name={t.pala120_name}
          price={t.pala120_price}
          image="/pala120.jpg"
          link={relativeLink("pala120")}
        />
      </ProductCardList>
    </div>
  );
};

export const MainPage = () => {
  return (
    <>
      <VerticalSpace value={40} />
      <StrengthsSection />
      <VerticalSpace value={20} />
      <ProductsSection />
    </>
  );
};
