import styled from "@emotion/styled";

export const tablet = "@media (min-width: 470px)";
export const desktop = "@media (min-width: 700px)";
export const wideDesktop = "@media (min-width: 1024px)";

export const colors = {
  orange: "#ff6500",
  white: "#fafaff",
  dirtyWhite: "#eef0f5",
  blueishWhite: "#c3c8da",
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

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

export const fontFamilies = {
  rubik: `"Rubik", sans-serif`,
  openSans: `"Open Sans", sans-serif`,
  workSans: `"Work Sans", sans-serif`
};

export const icons = {
  try: "try",
  explore: "explore",
  double_arrow: "double_arrow",
  place: "place",
  call: "call",
  email: "email",
  arrow_right_alt: "arrow_right_alt",
  local_shipping: "local_shipping",
  shopping_cart: "shopping_cart"
};

export const borderRadius = "15px";
