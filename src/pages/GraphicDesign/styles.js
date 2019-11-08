import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DesignItem = styled.div`
  width: 20rem;
  height: 20rem;
  text-align: center;
  img {
    margin-bottom: 0.54rem;
  }
`;

export const IdentidadeVisual = styled(DesignItem)``;

export const DesignEditorial = styled(DesignItem)``;

export const MediaSocial = styled(DesignItem)``;
