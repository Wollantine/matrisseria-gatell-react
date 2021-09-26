import { useContext } from "react";
import { TranslationContext } from "../translations/TranslationProvider";
import { ProductPage } from "../components/ProductPage";

export const Pala120 = () => {
  const t = useContext(TranslationContext);
  return (
    <ProductPage
      name={t.pala120_name}
      price={t.pala120_price}
      image="/pala120.jpg"
    >
      {t.pala120_description}
      {t.pala120_specs}
    </ProductPage>
  );
};
