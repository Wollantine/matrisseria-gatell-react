import { useContext } from "react";
import { TranslationContext } from "../translations/TranslationProvider";
import { ProductPage } from "../components/ProductPage";

const priceTableData = [
  { units: "1", price: 42.13 },
  { units: "2 o més", price: 37.12 },
  { units: "30 o més", price: 32.98 },
  { units: "200 o més", price: 30.04 }
];

export const Pala90 = () => {
  const t = useContext(TranslationContext);
  return (
    <ProductPage
      name={t.pala90_name}
      priceData={priceTableData}
      image="/pala90.jpg"
    >
      <h2>Descripció</h2>
      <p>- text</p>
      <p>- altres fotos</p>
      {t.pala90_description}
      <h2>Especificacions tècniques</h2>
      <p>- mides</p>
      <p>- compatibilitat fratasadores</p>
      {t.pala90_specs}
    </ProductPage>
  );
};
