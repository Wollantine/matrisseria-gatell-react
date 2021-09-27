import { Router } from "@reach/router";
import "./styles.css";
import styled from "@emotion/styled";
import ca from "./translations/ca";
import es from "./translations/es";
import { TranslationContext } from "./translations/TranslationProvider";
import { MainPage, ProductsSection } from "./pages/MainPage";
import { Navbar, navbarHeight } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { wideDesktop, VerticalSpace, colors } from "./DesignSystem";
import { Pala90 } from "./pages/Pala90";
import { Pala120 } from "./pages/Pala120";

const CenteredColumnContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${colors.blueishWhite};
  min-height: 70vh;
`;

const CenteredColumn = styled.div`
  display: flex;
  flex-direction: column;
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
            <ProductsSection path="products" standalone />
            <Pala90 path="products/pala90" />
            <Pala120 path="products/pala120" />
          </StyledRouter>
          <VerticalSpace value={40} />
        </CenteredColumn>
      </CenteredColumnContainer>
      <Footer />
    </>
  );
};

const Catalan = ({ children }) => (
  <TranslationContext.Provider value={ca}>
    <Layout />
  </TranslationContext.Provider>
);

const Spanish = ({ children }) => (
  <TranslationContext.Provider value={es}>
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
