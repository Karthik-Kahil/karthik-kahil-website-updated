import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  grid-template-rows: 45rem;
  grid-gap: 5rem;
  padding: 10rem 2% 0 2%;
  max-width: 1400px;
  margin: 0 auto;
  text-align: right;
`;

const GridSection = styled.div`
  background-color: var(--color-secondary-a0);
  padding: 5rem;
  border-radius: 50px;
  position: relative;
  overflow: hidden;

  & p {
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.5rem;
  }

  & h2 {
    font-family: "AcornRegular", sans-serif;
    font-size: 4rem;
    letter-spacing: 0.5rem;
  }

  & div {
    position: absolute;
    right: -55rem;
    left: 5rem;
    margin-top: 4rem;
    overflow: hidden;
  }

  & div img {
    width: 100%;
  }
`;

function Gridsection() {
  return (
    <GridContainer>
      <GridSection>
        <p>HELP SCOUT</p>
        <h2>AI</h2>
        <div>
          <img src="https://www.seanhalpin.xyz/work/ai/ai-hero@2x.png" alt="" />
        </div>
      </GridSection>
      <GridSection>
        <p>HELP SCOUT</p>
        <h2>Ariticles</h2>
        <div>
          <img
            src="https://www.seanhalpin.xyz/work/docs/docs-hero@2x.png"
            alt=""
          />
        </div>
      </GridSection>
    </GridContainer>
  );
}

export default Gridsection;
