import { useContext } from "react";
import { TranslationContext } from "../translations/TranslationProvider";
import {
  ProductPage,
  SectionTitle,
  SectionText
} from "../components/ProductPage";

export const Pala120 = () => {
  const t = useContext(TranslationContext);
  const descriptionBlocks = t.pala120_description.split("<br/>");
  return (
    <ProductPage
      name={t.pala120_name}
      price={t.pala120_price}
      image="/pala120.jpg"
    >
      <SectionTitle>{t.product_description_title}</SectionTitle>
      {descriptionBlocks.map((block) => (
        <SectionText>{block}</SectionText>
      ))}
      <SectionText>- altres fotos</SectionText>

      <SectionTitle>{t.product_specs_title}</SectionTitle>
      <SectionText>- mides</SectionText>
      <SectionText>- compatibilitat fratasadores</SectionText>
      {t.pala120_specs}
    </ProductPage>
  );
};
