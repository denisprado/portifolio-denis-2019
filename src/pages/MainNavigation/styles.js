import styled from "styled-components";
import { ParallaxLayer } from "react-spring/renderprops-addons";

export const LayerContainer = styled(ParallaxLayer)`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(28, 206, 234, 0.82);
  background: linear-gradient(
    -45deg,
    rgba(147, 26, 222, 0.83) 0%,
    rgba(28, 206, 234, 0.82) 100%
  );
`;
