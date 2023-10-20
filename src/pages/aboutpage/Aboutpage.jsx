import styled from "styled-components";
import HomeHeader from "../homepage/HomeHeader";

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
    background-color: var(--color-green-a1);
    color: var(--color-grey-0);
    padding: 1.5rem;
    margin-top: -10px;
  }

  & .right-grid > h2 {
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
        <div className="right-grid">
          <h2>
            I'm a Front-end Developer working remotely from 23°C Chennai, India.
          </h2>
          <p>
            Over the past 12+ years, I've worked in various areas of digital
            design, including front-end development, email, marketing, and app
            UI/UX. I'm proud to have worn many hats.
          </p>
        </div>
      </GridTwo>
    </>
  );
}

export default Aboutpage;
