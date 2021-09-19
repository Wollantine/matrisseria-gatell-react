import { useContext } from "react";
import { TranslationContext } from "./TranslationProvider";
import styled from "@emotion/styled";
import { ProductCard } from "./components/ProductCard";
import { CardList } from "./components/CardList";
import { CardRow } from "./components/CardRow";
import { fontFamilies, icons } from "./DesignSystem";
import { StrengthCard } from "./components/StrengthCard";

const StrengthsSection = () => {
  const t = useContext(TranslationContext);
  return (
    <CardRow>
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
    </CardRow>
  );
};

const SectionTitle = styled.h2`
  font-family: ${fontFamilies.rubik};
  margin-top: 30px;
`;

export const ProductsSection = () => {
  const t = useContext(TranslationContext);
  return (
    <div id="products">
      <SectionTitle>{t.main_products}</SectionTitle>
      <CardList>
        <ProductCard
          name={t.pala90_name}
          price={t.pala90_price}
          image="/pala90.jpg"
        />
        <ProductCard
          name={t.pala120_name}
          price={t.pala120_price}
          image="/pala120.jpg"
        />
      </CardList>
    </div>
  );
};

export const MainPage = () => {
  return (
    <>
      <StrengthsSection />
      <div style={{ height: "20px" }} />
      <ProductsSection />
    </>
  );
};
