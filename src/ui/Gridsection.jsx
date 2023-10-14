import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  grid-template-rows: 45rem;
  grid-gap: 5rem;
  padding: 10rem 2% 0 2%;
`;

const GridSection = styled.div`
  background-color: rebeccapurple;
  padding: 2rem;
  border-radius: 50px;
`;

function Gridsection() {
  return (
    <GridContainer>
      <GridSection>
        <p>HELP SCOUT</p>
        <h2>AI</h2>
      </GridSection>
      <GridSection>
        <p>HELP SCOUT</p>
        <h2>Ariticles</h2>
      </GridSection>
    </GridContainer>
  );
}

export default Gridsection;
