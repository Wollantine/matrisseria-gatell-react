import styled from "@emotion/styled";
import { desktop, wideDesktop } from "../DesignSystem";
import { StyledExternalLink } from "./StyledLink";

const Link = styled(StyledExternalLink)`
  width: 100%;
  ${desktop} {
    width: auto;
  }
`;

const Img = styled.img`
  max-width: 350px;
  width: 100%;
  ${wideDesktop} {
    max-width: 290px;
  }
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  ${desktop} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ImageGrid = ({ images }) => (
  <Grid>
    {images.map((image) => (
      <Link href={image}>
        <Img src={image} />
      </Link>
    ))}
  </Grid>
);
