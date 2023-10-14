import styled from "styled-components";
import Header from "../../ui/Header";
import SubText from "../../ui/SubText";
import HomeHeader from "./HomeHeader";
import Gridsection from "../../ui/Gridsection";

const StyledHome = styled.div`
  /* & div {
    padding-top: 5rem;
    padding-bottom: 5rem;
  } */
`;

function Homepage() {
  return (
    <StyledHome>
      <HomeHeader />
      <Gridsection />
    </StyledHome>
  );
}

export default Homepage;
