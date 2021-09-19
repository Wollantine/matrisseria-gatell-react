import { useContext } from "react";
import { TranslationContext } from "./Languages";
import { Helmet } from "react-helmet";

export const Meta = () => {
  const t = useContext(TranslationContext);
  return (
    <Helmet>
      <meta name="description" content={t.meta_description} />
      <meta name="keywords" content={t.meta_keywords} />
    </Helmet>
  );
};
