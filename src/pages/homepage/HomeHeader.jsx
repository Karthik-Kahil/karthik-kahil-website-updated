import styled, { css } from "styled-components";
import Header from "../../ui/Header";
import SubText from "../../ui/SubText";

const HomeHead = styled.div`
  padding-top: 20rem;
  /* background: var(--baackground--gradient); */

  ${(props) =>
    props.color === "gradient" &&
    css`
      background: var(--baackground--gradient);
    `}

  ${(props) =>
    props.color === "solid" &&
    css`
      background: inherit;
    `}

  & div {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
`;

function HomeHeader({ color, header, subText, padTop }) {
  return (
    <HomeHead color={color} padTop={padTop}>
      <Header>{!header ? `Hi. I'm Karthik.` : header}</Header>
      <Header>{!header && `A Developer.`}</Header>
      <div>
        <SubText>
          {!subText
            ? `I'm passionate about crafting experiences that are engaging,
          accessible, and user-centric.`
            : subText}
        </SubText>
      </div>
    </HomeHead>
  );
}

export default HomeHeader;
