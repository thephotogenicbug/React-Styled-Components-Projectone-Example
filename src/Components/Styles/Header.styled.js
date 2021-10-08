import styled from "styled-components";

export const StyledHeader = styled.header`
  /* background-color: #ebfbff; */
  /* background-color: ${(props) => props.bg}; // using props */
  background-color: ${({ theme }) => theme.colors.header}; // desturcture props 
  padding: 40px 0;

  /* 
    nesting
  h1 {
    color: red;
  }

  &:hover {
    background-color: black;
  } */
`;
