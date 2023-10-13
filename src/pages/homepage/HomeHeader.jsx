import styled from "styled-components";
import Header from "../../ui/Header";
import SubText from "../../ui/SubText";

const HomeHead = styled.div`
  padding-top: 20rem;
  background: var(--baackground--gradient);

  & div {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

function HomeHeader() {
  return (
    <HomeHead>
      <Header>Hi. I'm Karthik.</Header>
      <Header>A Developer.</Header>
      <div>
        <SubText>
          I'm passionate about crafting experiences that are engaging,
          accessible, and user-centric.
        </SubText>
      </div>
    </HomeHead>
  );
}

export default HomeHeader;
