import styled from "@emotion/styled";

const MaterialIcon = ({ type, className, ...props }) => (
  <span {...props} className={`${className} material-icons-outlined`}>
    {type}
  </span>
);

export const Icon = styled(MaterialIcon)`
  font-size: ${(props) => props.size}px;
`;
