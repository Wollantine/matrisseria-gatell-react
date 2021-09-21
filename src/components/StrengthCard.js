import styled from "@emotion/styled";
import { colors, fontFamilies, desktop, wideDesktop } from "../DesignSystem";
import { Icon } from "./Icon";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  overflow: hidden;
  background-color: ${colors.white};
  position: relative;
  clip-path: polygon(34px 0, 100% 0, 100% 100%, 0 100%, 0 44px);
  transition: box-shadow 0.2s;
  border: none;
  padding: 0;
  ${desktop} {
    width: 310px;
  }
`;

const IconTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  height: 100%;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
  color: ${colors.orange};
`;

const Title = styled.h3`
  font-family: ${fontFamilies.rubik};
  font-size: 28px;
  font-weight: bold;
  width: 90%;
  margin-top: 0;
  margin-bottom: 0;
  ${desktop} {
    font-size: 21px;
  }
  ${wideDesktop} {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-family: ${fontFamilies.openSans};
  font-size: 21px;
  text-align: left;
  ${desktop} {
    font-size: 16px;
  }
  ${wideDesktop} {
    font-size: 21px;
  }
`;

export const StrengthCard = ({ title, text, icon }) => (
  <Card>
    <IconTitleBlock>
      <IconContainer>
        <Icon type={icon} size={140} />
      </IconContainer>
      <Title>{title}</Title>
    </IconTitleBlock>
    <TextBlock>
      <Text>{text}</Text>
    </TextBlock>
  </Card>
);
