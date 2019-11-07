import React from "react";

import { Container } from "./styles";
import MainNavigation from "../MainNavigation";

function Sobre() {
  return (
    <MainNavigation>
      <Container>
        <h4>Sobre</h4>
        <p>
          Denis Prado Forigo (Águas de Santa Bárbara/1980) é designer gráfico
          desde 2004. Com formação em Processamento de Dados (CTI/Unesp) e
          Bacharelado em Linguística (Unicamp), atuou em diversas áreas criando
          projetos visuais para campanhas, eventos, livros e revistas. Criou
          identidades visuais e materiais institucionais, cartazes para filmes e
          websites institucionais. Desde 2011 é funcionário da gráfica da
          Unicamp e, em 2016, contemplado com edital da universidade, trabalhou
          durante um mês na VGTU (Vilnius Gediminas Technical University),
          produzindo uma série de materiais para a editora da universidade
          lituana. Atualmente produz com frequência materiais para o diretor
          espanhol Alexis Delgado Búrdalo e para Poliana Lima, coreógrafa e
          bailarina nascida no Brasil e radicada na Espanha. Produziu materiais
          para a ITCP Unicamp, Sesc Campinas, Editora Navegando entre outros.
          Venceu o concurso de logotipos do Instituto de Estudos da Linguagem da
          Unicamp.
        </p>
      </Container>
    </MainNavigation>
  );
}

export default Sobre;
