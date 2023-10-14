import { Outlet } from "react-router-dom";
import NavBar from "./features/navbar/NavBar";
import styled from "styled-components";

const AppStyled = styled.div`
  background-color: var(--color-primary);
`;

function AppLayout() {
  return (
    <AppStyled>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </AppStyled>
  );
}

export default AppLayout;
