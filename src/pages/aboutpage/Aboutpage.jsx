import styled from "styled-components";
import HomeHeader from "../homepage/HomeHeader";
import HeaderSub from "./HeaderSub";

const GridTwo = styled.div`
  display: grid;
  grid-template-columns: 400px 1fr;
  max-width: 1200px;
  padding: 0 2%;
  margin: 0 auto;
  grid-gap: 8rem;

  & div img {
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50rem 50rem 0px 0px;
  }

  & div > div {
    font-size: 1.5rem;
    background-color: var(--color-green-a1);
    color: var(--color-grey-0);
    padding: 1.5rem;
    margin-top: -10px;
  }
`;

function Aboutpage() {
  return (
    <>
      <div>
        <HomeHeader
          color={"gradient"}
          header={"I'm Karthik."}
          subText={true}
          padding={"10rem"}
        />
      </div>
      <GridTwo>
        <div>
          <img src="../../public/karthik-kahil-faces.webp" alt="" />
          <div>
            <h2>Karthik Kahil</h2>
          </div>
        </div>
        <HeaderSub />
      </GridTwo>
    </>
  );
}

export default Aboutpage;
