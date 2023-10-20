import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  z-index: 999;
`;

const Div = styled.div`
  margin: 1rem 0.9rem;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
`;

const StyledUl = styled.ul`
  display: flex;
  text-align: center;
  margin: 1rem 0.9rem;
  border-radius: 50px;
  position: relative;

  & a {
    border-radius: 50px;
    padding: 1rem 1rem;
  }

  & li {
    display: flex;
    justify-content: space-evenly;
    margin: 0 0.4rem;
    z-index: 2;
  }

  .w-90 {
    width: 90px;
  }

  .w-80 {
    width: 80px;
  }

  .w-70 {
    width: 70px;
  }

  .w-110 {
    width: 110px;
  }

  .w-100 {
    width: 100px;
  }

  .animation {
    position: absolute;
    height: 100%;
    top: 0px;
    z-index: 1;
    background: var(--color-grey-0);
    border-radius: 50px;
    transition: all 0.4s ease 0s;

    -webkit-box-shadow: 0px 0px 107px 1px rgba(0, 0, 0, 0.01);
    -moz-box-shadow: 0px 0px 107px 1px rgba(0, 0, 0, 0.01);
    box-shadow: 0px 0px 107px 1px rgba(0, 0, 0, 0.01);
  }

  .animation {
    width: 90px;
    left: 4px;
  }
`;

const navLinks = [
  {
    name: "Works",
    width: "w-90",
    transition: { left: "4px", width: "90px" },
    to: "/",
  },
  {
    name: "About",
    width: "w-80",
    transition: { left: "102px", width: "80px" },
    to: "/about",
  },
  {
    name: "Play",
    width: "w-70",
    transition: { left: "189px", width: "72px" },
    to: "/play",
  },
  {
    name: "Notes",
    width: "w-100",
    transition: { left: "267px", width: "103px" },
    to: "/notes",
  },
  {
    name: "Contact",
    width: "w-110",
    transition: { left: "375px", width: "113px" },
    to: "/contact",
  },
];

function NavBar() {
  const [active, setActive] = useState([]);
  const { pathname } = useLocation();

  useEffect(() => {
    navLinks.map((links) => pathname === links.to && setActive((el) => links));

    document.title = `Karthik Kahil • ${active.name ? active.name : "404"}`;
  }, [active]);

  const onClickHandler = (links) => {
    setActive((el) => links);
  };

  return (
    <Nav>
      <Div>
        <StyledUl>
          {navLinks.map((links) => (
            <li key={links.name} onClick={() => onClickHandler(links)}>
              <NavLink to={links.to} className={links.width}>
                {links.name}
              </NavLink>
            </li>
          ))}
          <div
            className="animation"
            style={{
              left: active.transition?.left,
              width: active.transition?.width,
            }}
          ></div>
        </StyledUl>
      </Div>
    </Nav>
  );
}

export default NavBar;
