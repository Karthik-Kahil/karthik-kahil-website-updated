import styled from "styled-components";
import Header from "../../ui/Header";
import SubText from "../../ui/SubText";
import HomeHeader from "./HomeHeader";

const StyledHome = styled.div`
  & div {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

function Homepage() {
  return (
    <StyledHome>
      <HomeHeader />
    </StyledHome>
  );
}

export default Homepage;
