import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  flex-direction: column;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContainerWorks = styled.div`
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
  margin: 0.15rem;
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
    background-image: ${props => props.image && `url('${props.image}')`};
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin: 0.35rem;
    height: 50vh;
    width: 40vh;
    border-radius: 5px;
  }
`;
