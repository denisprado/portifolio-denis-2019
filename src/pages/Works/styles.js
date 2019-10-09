import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  flex-direction: row;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Work = styled.div`
  height: 40vh;
  width: 4vw;
  display: flex;

  flex-direction: column;
  background-color: ${props => (props.color ? props.color : "blue")};
  align-items: center;
  justify-content: center;
  transition: all 0.8s;
  cursor: pointer;

  p {
    transition: all 0.8s;
    transform: rotate(-90deg);
  }
  &:hover {
    p {
      transform: rotate(0deg);
    }
    background-image: url("https://pro2-bar-s3-cdn-cf3.myportfolio.com/e00b62abdab10aa8ffbf183b47d04e52/4b439f8a-790c-4b66-88d0-222a168c7a15_rwc_0x0x300x300x4096.png?h=f2952c0b296756e5645e6e762866e4b1");
    background-repeat: no-repeat;
    background-position: center;

    height: 50vh;
    width: 50vh;
    border-radius: 5px;
  }
`;
