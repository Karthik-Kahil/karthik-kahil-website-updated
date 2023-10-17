import { Outlet } from "react-router-dom";
import NavBar from "./features/navbar/NavBar";
import styled from "styled-components";
import Footer from "./features/footer/Footer";

import { gsap, Power3 } from "gsap";

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
