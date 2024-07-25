import styled from "styled-components";

const mainColor = "rgb(0, 128, 0)";
const reverseColor = "rgb(238, 238, 238)";

const widthHeader = "71px";
const heihgHeader = "29px";

const Button = styled.button`
  cursor: pointer;
  background-color: ${(props) =>
    props.$variant === "main" ? mainColor : reverseColor};
  color: ${(props) => (props.$variant === "main" ? "white" : "green")};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  border-radius: 15px;
  font-weight: bold;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  border: solid 1px;
  width: ${(props) => {
    if (props.$place === "logoutButton") {
      return widthHeader;
    } else if (props.$place === "confirm-logic") {
      return "68px";
    } else if (props.$place === "newAdd") {
      return "122px";
    } else {
      return "75px";
    }
  }};
  height: ${(props) => {
    if (props.$place === "logoutButton") {
      return heihgHeader;
    } else if (props.$place === "confirm-logic") {
      return "38px";
    } else {
      return "55px";
    }
  }};
  &:hover {
    background-color: rgb(111, 255, 75);
    color: black;
  }
`;

export default Button;
