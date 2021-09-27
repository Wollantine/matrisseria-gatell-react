import { useContext } from "react";
import { TranslationContext } from "../translations/TranslationProvider";
import {
  ProductPage,
  SectionTitle,
  SectionText
} from "../components/ProductPage";
import { ImageGrid } from "../components/ImageGrid";

const priceTableData = (t) => [
  /*
  { units: "1", price: 42.13 },
  { units: `2 ${t.product_units_or_more}`, price: 37.12 },
  { units: `30 ${t.product_units_or_more}`, price: 32.98 },
  { units: `200 ${t.product_units_or_more}`, price: 30.04 }
*/
];

export const Pala120 = () => {
  const t = useContext(TranslationContext);
  const descriptionBlocks = t.pala120_description.split("<br/>");
  return (
    <ProductPage
      name={t.pala120_name}
      priceData={priceTableData(t)}
      image="/pala120.jpg"
    >
      <SectionTitle>{t.product_description_title}</SectionTitle>
      {descriptionBlocks.map((block) => (
        <SectionText>{block}</SectionText>
      ))}
      <ImageGrid
        images={[
          "/pala90_pala120_comparades.jpg",
          "/pala120.jpg",
          "/pales.jpg"
        ]}
      />

      <SectionTitle>{t.product_specs_title}</SectionTitle>
      <SectionText>- mides</SectionText>
      <SectionText>- compatibilitat fratasadores</SectionText>
      {t.pala120_specs}
    </ProductPage>
  );
};
