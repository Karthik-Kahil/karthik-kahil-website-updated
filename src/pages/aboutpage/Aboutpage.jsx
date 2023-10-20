import styled from "styled-components";
import HomeHeader from "../homepage/HomeHeader";

const gridTwo = styled.div`
  display: grid;
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
      <div>
        <div>
          <img src="../../public/karthik-kahil-faces.jpg" alt="" />
          <div>
            <h2>Karthik Kahil</h2>
          </div>
        </div>
        <div>
          <h2>
            I'm a Product Designer working remotely from 17°C Dublin, Ireland.
          </h2>
          <p>
            Over the past 12+ years, I've worked in various areas of digital
            design, including front-end development, email, marketing, and app
            UI/UX. I'm proud to have worn many hats.
          </p>
        </div>
      </div>
    </>
  );
}

export default Aboutpage;
