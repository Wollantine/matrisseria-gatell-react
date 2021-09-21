import styled from "@emotion/styled";
import { desktop } from "../DesignSystem";

export const StrengthCardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${desktop} {
    flex-direction: row;
  }
`;
