import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  align-items: start;
  justify-content: space-beetwen;
`;

export const ContainerWorks = styled.div`
  flex-direction: row;
  display: flex;
  height: 38rem;
  width: 65rem;
  align-items: start;
  justify-content: start;
  overflow-x: scroll;
`;

export const ContainerWork = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WorkMenu = styled.div`
  display: flex;
  flex-direction: column;
  width: 15rem;
  justify-content: start;
`;

export const Dashboard = styled.div`
  flex-direction: row;
  button {
    margin-right: 5px;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Work = styled.div`
  height: 33rem;
  width: 23rem;
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.color ? props.color : "blue")};
  background-image: ${props => props.image && `url('${props.image}')`};
  margin-right: 1rem;
  align-items: start;
  justify-content: flex-start;
  transition: all 0.8s;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  &:hover {
    background-image: ${props => props.image && `url('${props.image}')`};
    margin: 0.35rem;
    height: 34rem;
    width: 24rem;
    border-radius: 5px;
  }
`;
