import { useContext } from "react";
import { TranslationContext } from "../translations/TranslationProvider";
import { ProductPage } from "../components/ProductPage";

export const Pala90 = () => {
  const t = useContext(TranslationContext);
  return (
    <ProductPage name={t.pala90_name} price={t.pala90_price}>
      {t.pala90_description}
      {t.pala90_specs}
    </ProductPage>
  );
};
