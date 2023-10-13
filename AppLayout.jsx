import { Outlet } from "react-router-dom";
import NavBar from "./src/features/navbar/NavBar";

function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default AppLayout;
