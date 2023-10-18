import styled from "styled-components";
import HomeHeader from "./HomeHeader";
import GridContainer from "../../ui/GridContainer";
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
      <HomeHeader color={"gradient"} padding={"20rem"} />
      <GridContainer gridview="left-sm">
        <Gridsection
          subText={"HELP SCOUT"}
          header={"AI"}
          imageUrl={"https://www.seanhalpin.xyz/work/ai/ai-hero@2x.png"}
          bgcolors={"var(--color-secondary-a0)"}
        />
        <Gridsection
          subText={"HELP SCOUT"}
          header={"Ariticles"}
          imageUrl={"https://www.seanhalpin.xyz/work/docs/docs-hero@2x.png"}
          bgcolors={"var(--color-secondary-a1)"}
        />
      </GridContainer>
      <GridContainer gridview="right-sm">
        <Gridsection
          subText={"FIGMA"}
          header={"Plugins"}
          imageUrl={"https://www.seanhalpin.xyz/work/ai/ai-hero@2x.png"}
          bgcolors={"var(--color-secondary-a2)"}
        />
        <Gridsection
          subText={"HELP SCOUT"}
          header={"Mobile"}
          imageUrl={
            "https://www.seanhalpin.xyz/work/mobile/mobile-header_03.png"
          }
          imgfull={"imgfull"}
          bgcolors={"var(--color-secondary-a3)"}
        />
      </GridContainer>
      <HomeHeader
        color={"solid"}
        header={"In Progress."}
        subText={
          "Work in various states of design and development, from side projects, to in-flight product design and development."
        }
        padding={"10rem"}
      />
      <GridContainer gridview="right-sm">
        <Gridsection
          subText={"MULTIPLAYER"}
          header={"Doodler"}
          imageUrl={"https://www.seanhalpin.xyz/work/ai/ai-hero@2x.png"}
          bgcolors={"var(--color-grey-0)"}
        />
        <Gridsection
          subText={"MOBILE"}
          header={"Dark Mode"}
          imageUrl={
            "https://www.seanhalpin.xyz/work/hsdm/hsdm-header_02@2x.png"
          }
          imgfull={"imgfull"}
          color={"white"}
          bgcolors={"var(--color-grey-1)"}
        />
      </GridContainer>
    </StyledHome>
  );
}

export default Homepage;
