import styled, { css } from "styled-components";

const Header = styled.h2`
  font-family: "AcornBold", sans-serif;
  font-size: 10rem;
  line-height: 10rem;
  color: var(--color-green-a1);
  text-align: center;
  position: relative;

  /* ${(props) =>
    props.icon === "visible" &&
    css`
      &::before {
        content: url("../../public/9281084.png");
        background-size: 10px 20px;
        display: inline-block;
        width: 10px;
        height: 20px;
        position: absolute;
        transform: rotate(-20deg) scale(0.08);
      }
    `} */
`;

export default Header;
