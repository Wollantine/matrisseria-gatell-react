import styled from "@emotion/styled";
import { desktop, colors, Gap, fontFamilies } from "../DesignSystem";

const Card = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${colors.white};
  transition: box-shadow 0.2s;
  cursor: pointer;
  border: none;
  padding: 0;
  :hover {
    box-shadow: 3px 3px 5px #888888;
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
  font-size: 24px;
  text-align: center;
  width: 90%;
  text-decoration: underline;
  ${desktop} {
    text-align: left;
  }
`;

const Price = styled.span`
  font-family: ${fontFamilies.rubik};
  font-size: 28px;
  font-weight: bold;
  min-width: 120px;
  text-align: center;
  align-self: flex-end;
  margin-right: 10px;
  ${desktop} {
    align-self: center;
  }
`;

export const ProductCard = ({ name, price, image }) => {
  return (
    <Card role="button" tabindex="0">
      <Picture src={image} />
      <Gap mobile={40} desktop={50} />
      <Name>{name}</Name>
      <Gap mobile={30} desktop={10} />
      <Price>{price}</Price>
      <Gap mobile={10} desktop={0} />
    </Card>
  );
};
