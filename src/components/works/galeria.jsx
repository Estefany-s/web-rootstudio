import styled from 'styled-components';

import imageBlue from '../../images/imageBlue.jpg';
import leon from '../../images/leon.jpeg';
import imagenLightblue from '../../images/imagenLightblue.jpg';
import girlNotebook from '../../images/girlNotebook.jpeg';
import newark from '../../images/newark.jpeg';
import fruit from '../../images/fruit.jpeg';

const Wrapper = styled.div`
  margin: 100px 70px;
  & > img {
    padding: 10px;
  }
`

const Galeria = () => {
  return (
    <Wrapper>
      <img src={imageBlue} alt=""/>
      <img src={leon} alt=""/>
      <img src={imagenLightblue} alt=""/>
      <img src={girlNotebook} alt=""/>
      <img src={newark} alt=""/>
      <img src={fruit} alt=""/>
    </Wrapper>
  )
}

export default Galeria