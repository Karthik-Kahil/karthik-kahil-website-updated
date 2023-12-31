import styled, { css } from "styled-components";

const GridContainer = styled.div`
  ${(props) =>
    props.gridview === "left-sm" &&
    css`
      grid-template-columns: 0.6fr 1fr;
    `}

  ${(props) =>
    props.gridview === "right-sm" &&
    css`
      grid-template-columns: 1fr 0.6fr;
    `}

  display: grid;
  grid-template-rows: 50rem;
  grid-gap: 5rem;
  padding: 10rem 2% 0 2%;
  max-width: 1400px;
  margin: 0 auto;
  text-align: right;
  margin-bottom: 3rem;
`;

export default GridContainer;
