import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(prop) => prop.backgroundColor ? prop.backgroundColor : "green" };
  &:hover {
    background-color: transparent;
    transition: 0.2s;
  }
`;

export default StyledButton;
