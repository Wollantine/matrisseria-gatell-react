import { Router } from "@reach/router";
import "./styles.css";
import styled from "@emotion/styled";
import ca from "./ca";
import { TranslationContext } from "./TranslationProvider";
import { MainPage, ProductsSection } from "./MainPage";
import { Navbar, navbarHeight } from "./components/Navbar";
import { wideDesktop, VerticalSpace } from "./DesignSystem";

const ProductPage = ({ product }) => null;

const CenteredColumnContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CenteredColumn = styled.div`
  display: flex;
  width: 90%;
  max-width: 970px;
  ${wideDesktop} {
    width: 100%;
  }
`;

const StyledRouter = styled(Router)`
  width: 100%;
`;

export const Layout = () => {
  return (
    <>
      <Navbar />
      <VerticalSpace value={navbarHeight} />
      <CenteredColumnContainer>
        <CenteredColumn>
          <StyledRouter>
            <MainPage path="/" />
            <ProductsSection path="products" />
            <ProductPage path="products/pala90" product="pala90" />
            <ProductPage path="products/pala120" product="pala120" />
          </StyledRouter>
        </CenteredColumn>
      </CenteredColumnContainer>
    </>
  );
};

const Catalan = ({ children }) => (
  <TranslationContext.Provider value={ca}>
    <Layout />
  </TranslationContext.Provider>
);

const Spanish = ({ children }) => (
  <TranslationContext.Provider value={ca}>
    <Layout />
  </TranslationContext.Provider>
);

export default function App() {
  return (
    <Router>
      <Catalan path="/*" />
      <Spanish path="es/*" />
    </Router>
  );
}
