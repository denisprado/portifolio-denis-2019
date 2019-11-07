import styled from "styled-components";
import bg from "../../assets/images/homeBg.svg";
import bg1600 from "../../assets/images/homeBg1600.svg";

export const Container = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  height: 40rem;
  @media (max-width: 1600px) {
    background-image: url(${bg1600});
    height: 35rem;
  }
`;
