import { Outlet } from "react-router-dom";
import NavBar from "./features/navbar/NavBar";
import styled from "styled-components";
import Footer from "./features/footer/Footer";

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
      <Footer />
    </AppStyled>
  );
}

export default AppLayout;
