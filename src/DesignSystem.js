import styled from "@emotion/styled";

export const tablet = "@media (min-width: 470px)";
export const desktop = "@media (min-width: 700px)";
export const wideDesktop = "@media (min-width: 1024px)";

export const colors = {
  orange: "#ff6500",
  white: "#fafaff",
  dirtyWhite: "#e4e4e4",
  grey: "#555555",
  darkGrey: "#222222",
  black: "#151515"
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

export const HorizontalSpace = styled.div`
  width: ${(props) => props.value}px;
`;

export const fontFamilies = {
  rubik: `"Rubik", sans-serif`,
  openSans: `"Open Sans", sans-serif`
};

export const icons = {
  try: "try",
  explore: "explore",
  double_arrow: "double_arrow",
  place: "place",
  call: "call",
  email: "email",
  arrow_right_alt: "arrow_right_alt"
};
