import { useContext } from "react";
import { TranslationContext } from "../translations/TranslationProvider";

export const ProductPage = ({ name, price, children }) => {
  const t = useContext(TranslationContext);
  return (
    <div>
      <h1>{name}</h1>
      <span>{t.product_manufacturer}</span>
      <span>
        {price}
        {t.product_per_unit}
      </span>
      <button>{t.product_order}</button>
      {children}
    </div>
  );
};
