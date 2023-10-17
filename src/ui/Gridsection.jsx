import styled, { css } from "styled-components";

const StyledSection = styled.div`
  background-color: ${(props) => props.bgcolors};
  padding: 5rem;
  border-radius: 50px;
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
  cursor: pointer;

  ${(props) =>
    props?.color &&
    css`
      color: var(--color-grey-0);
    `}

  &:hover {
    img {
      transform: translateY(20px);
      transition: all 0.5s ease;
    }
    transform: translateY(-10px);

    -webkit-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 40px 4px rgba(0, 0, 0, 0.1);
  }

  & p {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
  }

  & h2 {
    font-family: "AcornBold", sans-serif;
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }

  & div {
    ${(props) =>
      props?.imgfull ||
      css`
        position: absolute;
      `}
    right: -55rem;
    left: 5rem;
    margin-top: 4rem;
    overflow: hidden;
  }

  & div img {
    width: 100%;
    transition: all 0.5s ease;
  }
`;

function Gridsection({ subText, header, imageUrl, bgcolors, imgfull, color }) {
  return (
    <StyledSection bgcolors={bgcolors} imgfull={imgfull} color={color}>
      <p>{subText}</p>
      <h2>{header}</h2>
      <div className="imageProduct">
        <img src={imageUrl} alt={subText} />
      </div>
    </StyledSection>
  );
}

export default Gridsection;
