import styled from "@emotion/styled";
import { desktop, tablet } from "../DesignSystem";

export const ProductCardList = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: 1fr;
  ${tablet} {
    grid-template-columns: 1fr 1fr;
  }
  ${desktop} {
    grid-template-columns: 1fr;
  }
`;
