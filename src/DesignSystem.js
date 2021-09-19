import styled from "@emotion/styled";

export const desktop = "@media (min-width: 700px)";
export const wideDesktop = "@media (min-width: 1024px)";

export const colors = {
  orange: "#ff6500",
  white: "#fafaff"
};

export const Gap = styled.div`
  height: ${(props) => props.mobile}px;
  ${desktop} {
    width: ${(props) => props.desktop}px;
  }
`;

export const VerticalSpace = styled.div`
  height: ${(props) => props.value}px;
`;

export const fontFamilies = {
  rubik: `"Rubik", sans-serif`,
  openSans: `"Open Sans", sans-serif`
};

export const icons = {
  try: "try",
  explore: "explore",
  double_arrow: "double_arrow"
};
