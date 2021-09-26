import styled from "@emotion/styled";
import { colors, fontFamilies } from "../DesignSystem";

const iva = 0.21;

const Table = styled.table`
  table-layout: fixed;
  width: 100%;
  max-width: 320px;
  border-collapse: collapse;
  font-family: ${fontFamilies.openSans};
  font-size: 16px;
`;

const TableHeader = styled.tr`
  border-bottom: 0px solid ${colors.grey};
  width: 50%;
`;

const cellPadding = "12px 10px";

const HeaderCell = styled.th`
  padding: ${cellPadding};
  background-color: ${colors.dirtyWhite};
`;

const HeaderUnitsCell = styled(HeaderCell)`
  text-align: left;
`;

const HeaderPriceCell = styled(HeaderCell)`
  text-align: right;
`;

const TableRow = styled.tr`
  border-top: 0px solid ${colors.grey};
  :hover {
    td {
      background-color: ${colors.dirtyWhite};
    }
  }
`;

const UnitsCell = styled.td`
  padding: ${cellPadding};
  text-align: left;
  font-size: 18px;
`;

const PriceCell = styled.td`
  padding: ${cellPadding};
  text-align: right;
  font-weight: bold;
  font-size: 21px;
`;

const NoVatCell = styled.td`
  padding: ${cellPadding};
  text-align: right;
  color: ${colors.grey};
  font-size: 16px;
`;

const format = (eur, locale) =>
  new Intl.NumberFormat("ca-es", { style: "currency", currency: "EUR" }).format(
    eur
  );

const NoVatPrice = ({ price }) => {
  const noVatPrice = price - price * iva;
  const formattedPrice = format(noVatPrice);
  return formattedPrice;
};

export const PriceTable = ({ priceData, unitsTitle, priceTitle }) => {
  return (
    <Table>
      <thead>
        <TableHeader>
          <HeaderUnitsCell scope="col">{unitsTitle}</HeaderUnitsCell>
          <HeaderPriceCell scope="col">{priceTitle}</HeaderPriceCell>
          <HeaderPriceCell scope="col">Sense IVA</HeaderPriceCell>
        </TableHeader>
      </thead>
      <tbody>
        {priceData.map((row) => (
          <TableRow key={row.units}>
            <UnitsCell>{row.units}</UnitsCell>
            <PriceCell>{format(row.price)}</PriceCell>
            <NoVatCell>
              <NoVatPrice price={row.price} />
            </NoVatCell>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
