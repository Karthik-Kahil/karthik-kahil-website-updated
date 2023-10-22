import styled from "styled-components";
import Button from "../../ui/Button";
import HomeHeader from "../homepage/HomeHeader";
import { Link } from "react-router-dom";

const StyledPage = styled.div`
  text-align: center;
`;

function PageNotFound() {
  return (
    <StyledPage>
      <HomeHeader
        color={"gradient"}
        header={"Whoops"}
        subText={`You've taken a wrong turn somewhere. Let's get you back on track.`}
        padding={"10rem"}
      />
      <Button type="button">
        <Link to={"/"}>Home</Link>
      </Button>
    </StyledPage>
  );
}

export default PageNotFound;
