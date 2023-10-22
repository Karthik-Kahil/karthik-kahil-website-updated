import styled from "styled-components";

const StyledHeader = styled.div`
  & h2 {
    font-family: "AcornRegular", sans-serif;
    font-size: 5rem;
    line-height: 6rem;
  }

  & p {
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    line-height: 3rem;
    margin-top: 2rem;
  }
`;

function HeaderSub() {
  return (
    <StyledHeader className="right-grid">
      <h2>
        I'm a Front-end Developer working remotely from 23°C Chennai, India.
      </h2>
      <p>
        Over the past 12+ years, I've worked in various areas of digital design,
        including front-end development, email, marketing, and app UI/UX. I'm
        proud to have worn many hats.
      </p>
    </StyledHeader>
  );
}

export default HeaderSub;
