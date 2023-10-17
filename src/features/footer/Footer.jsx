import { Link } from "react-router-dom";
import styled from "styled-components";

const Styledfooter = styled.footer`
  display: grid;
  grid-template-columns: 200px 1fr;
  max-width: 1000px;
  margin: 0 auto;
  font-family: "Poppins", sans-serif;
  margin-top: 20rem;
  margin-bottom: 10rem;

  & li,
  a {
    font-size: 1.5rem;
    padding: 1rem 0;
  }

  & h4 {
    font-size: 1.7rem;
    font-weight: 600;
    padding-bottom: 1.5rem;
  }
`;

function Footer() {
  return (
    <Styledfooter>
      <div>
        <h4>Elsewhere</h4>
        <ul>
          <li>
            <Link>Figma</Link>
          </li>
          <li>
            <Link>Github</Link>
          </li>
          <li>
            <Link>Posts</Link>
          </li>
          <li>
            <Link>CV</Link>
          </li>
          <li>
            <Link>LinkedIn</Link>
          </li>
        </ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul>
          <li>
            <Link>Message</Link>
          </li>
        </ul>
      </div>
    </Styledfooter>
  );
}

export default Footer;
