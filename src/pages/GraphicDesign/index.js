import React from 'react';

import { Container, IdentidadeVisual, DesignEditorial, MediaSocial } from './styles';

function GraphicDesign (){
return (
    <Container>
        <IdentidadeVisual>
            <p>Identidade Visual</p>
        </IdentidadeVisual>      
        <DesignEditorial>
            <p>Design Editorial</p>
        </DesignEditorial>
        <MediaSocial>
            <p>Gráfica & Social Media</p>
        </MediaSocial>
    </Container>  
    )  
};

export default GraphicDesign;
