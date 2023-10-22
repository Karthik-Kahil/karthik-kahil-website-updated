import styled from "styled-components";

const Button = styled.button`
  font-size: 1.5rem;
  text-align: center;
  border: 0;

  & a {
    padding: 1.5rem 3rem;
    background-color: var(--color-green-a1);
    border-radius: 10px;
    color: var(--color-grey-0);
  }
`;

export default Button;
