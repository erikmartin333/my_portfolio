import styled from "@emotion/styled";
import PerthCity from "../../src/sunset.jpg";

// BACKGROUND IMAGES

export const PerthImage = styled.div`
  background-size: 600px;
  background-image: url(${PerthCity});
`;

//types

export const Website = styled.div({
  textAlign: "center",
  backgroundColor: "skyblue",
  width: "100%",
  height: "100%",
});

export const H1 = styled.h1({
  color: "purple",
  fontSize: "400%",
  marginTop: "100px",
  textAlign: "center",
});

export const SubHeadings = styled.h1({
  color: "darkgreen",
  fontSize: "70px",
  marginTop: "0px",
  marginBottom: "30px",
  textAlign: "center",
});

export const Container = styled.div({
  marginLeft: "10%",
  marginRight: "10%",
});

export const P = styled.p({
  width: "100%",
  fontSize: "200%",
  color: "black",
  marginBottom: "50px",
  //fontWeight: "bold",
});

export const Footer = styled.footer({
  background: "midnightblue",
  width: "100%",
  position: "fixed",
  bottom: "0",
});

export const Table = styled.table({
  width: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "50px",
  border: "1px solid black",
});

export const Column = styled.th({
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "0px",
  border: "1px solid black",
});

export const Form = styled.form({
  border: "7px solid white",
  marginLeft: "10%",
  marginRight: "10%",
  width: "40%",
  height: "50%",
  display: "inline-block",
  textAlign: "left",
});

export const A = styled.a({
  color: "olive",
  textDecoration: "none",
});

export const Span = styled.span({
  color: "white",
  fontSize: 70,
  backgroundColor: "transparent",
});

//START HELPERS
export const breakpoints: number[] = [576, 768, 992, 1200];

export const mediaQueries: string[] = breakpoints.map(
  (bp) => `@media (max-width: ${bp}px)`
);
//END HELPERS

export const LIZZARD = styled.div({
  [mediaQueries[1]]: {
    display: "none",
  },
});
