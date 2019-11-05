import styled from "styled-components";
import idVisual from "../../assets/images/identidadeVisual.svg";
import socialMedia from "../../assets/images/socialMediaPrint.svg";
import designEdit from "../../assets/images/designEditorial.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DesignItem = styled.div`
  width: 20rem;
  height: 20rem;
  margin: 0 5rem 0 0;
  background-repeat: no-repeat;
  text-align: center;
  p {
    margin-top: 18rem;
  }
`;

export const IdentidadeVisual = styled(DesignItem)`
  background-image: url(${idVisual});
`;

export const DesignEditorial = styled(DesignItem)`
  background-image: url(${designEdit});
`;

export const MediaSocial = styled(DesignItem)`
  background-image: url(${socialMedia});
`;
