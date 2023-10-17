import React, { useRef, useEffect } from "react";

import { Power4 } from "gsap";
import styled from "styled-components";

const StyledTransition = styled.div`
  .transition-effect {
    position: absolute;
    z-index: 1000000000000000;
    background-color: #89f0f1;
    top: 0;
    width: 100%;
    height: 100vh;
  }
`;

function Transition({ timeline }) {
  const trans = useRef(null);
  useEffect(() => {
    timeline.to(trans.current, {
      duration: 4,
      x: 2500,
      ease: Power4.easeOut,
    });
  });
  return (
    <div>
      <StyledTransition ref={trans}></StyledTransition>
    </div>
  );
}

export default Transition;
