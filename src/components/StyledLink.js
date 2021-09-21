import styled from "@emotion/styled";
import { Link } from "@reach/router";

const linkStyles = `
color: white;
  text-decoration: underline;
  :hover {
    color: #ff5533;
    text-decoration: none;
  }
`;

export const StyledLink = styled(Link)`
  ${linkStyles}
`;

const ExternalLink = styled.a`
  ${linkStyles}
`;

export const StyledExternalLink = (props) => (
  <ExternalLink target="_blank" rel="noopener noreferrer" {...props} />
);
