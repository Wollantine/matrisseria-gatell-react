import styled from "@emotion/styled";

const MaterialIcon = ({ type, className }) => (
  <span className={`${className} material-icons-outlined`}>{type}</span>
);

export const Icon = styled(MaterialIcon)`
  font-size: ${(props) => props.size}px;
`;
