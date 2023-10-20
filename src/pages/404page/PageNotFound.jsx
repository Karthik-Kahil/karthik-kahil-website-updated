import { Button } from "react-styled-components";
import HomeHeader from "../homepage/HomeHeader";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <HomeHeader
        color={"gradient"}
        header={"Whoops"}
        subText={`You've taken a wrong turn somewhere. Let's get you back on track.`}
        padding={"10rem"}
      />
      <Button>
        <Link to={"/"}>Home</Link>
      </Button>
    </div>
  );
}

export default PageNotFound;
