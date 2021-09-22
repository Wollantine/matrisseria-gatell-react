import styled from "@emotion/styled";
import { Link } from "@reach/router";
import { useContext } from "react";
import {
  desktop,
  colors,
  Gap,
  fontFamilies,
  VerticalSpace,
  HorizontalSpace,
  icons,
  wideDesktop
} from "../DesignSystem";
import { Icon } from "./Icon";
import { TranslationContext } from "../translations/TranslationProvider";

const Price = styled.span`
  font-family: ${fontFamilies.rubik};
  font-size: 21px;
  font-weight: bold;
  min-width: 160px;
  text-align: center;
  align-self: center;
  margin-right: 10px;
  ${wideDesktop} {
    font-size: 28px;
    min-width: 220px;
  }
`;

const LearnMore = styled.div`
  display: flex;
  justify-content: flex-end;
  align-self: flex-end;
  color: ${colors.grey};
  & #learn_more_arrow {
    transition: all 0.2s;
  }
`;

const PriceColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 15px;
  ${desktop} {
    width: auto;
  }
`;

const LearnMoreText = styled.span`
  font-family: ${fontFamilies.openSans};
  font-size: 16px;
  line-height: 24px;
  transition: all 0.2s;
  :hover {
    text-decoration: underline;
  }
`;

const EndBlock = ({ price }) => {
  const t = useContext(TranslationContext);
  return (
    <PriceColumn>
      <VerticalSpace value={24} />
      <Price>{price}</Price>
      <LearnMore id="learn_more">
        <LearnMoreText>{t.main_learn_more}</LearnMoreText>
        <HorizontalSpace value={5} />
        <Icon id="learn_more_arrow" type={icons.arrow_right_alt} />
        <HorizontalSpace value={24} />
      </LearnMore>
    </PriceColumn>
  );
};

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${colors.white};
  transition: all 0.2s;
  cursor: pointer;
  text-decoration: none;
  color: ${colors.black};
  :hover {
    box-shadow: 3px 3px 5px #888888;
    color: ${colors.orange};
    & #learn_more {
      color: ${colors.orange};
    }
    & #learn_more_arrow {
      transform: translateX(5px);
    }
  }
  :active {
    box-shadow: none;
  }
  ${desktop} {
    align-items: center;
    flex-direction: row;
  }
`;

const Picture = styled.img`
  width: 100%;
  ${desktop} {
    width: 200px;
    height: 130px;
  }
`;

const Name = styled.span`
  font-family: ${fontFamilies.rubik};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
  width: 90%;
  ${desktop} {
    text-align: left;
  }
  ${wideDesktop} {
    font-size: 21px;
  }
`;

export const ProductCard = ({ name, price, image, link }) => {
  return (
    <Card role="button" tabIndex="0" to={link}>
      <Picture src={image} />
      <Gap mobile={40} desktop={50} />
      <Name>{name}</Name>
      <Gap mobile={0} desktop={20} />
      <EndBlock price={price} />
      <Gap mobile={10} desktop={0} />
    </Card>
  );
};
