import styled from 'styled-components';

import ImageOne from '../../images/imageBlue.jpg';
import ImageTwo from '../../images/imagenLightblue.jpg';
import ImageThree from '../../images/miniCartel.jpg';
import ImageFour from '../../images/periodico.jpg';
import Button, {Wrapper as ButtonWrapper} from './button';

const Container = styled.div`
  margin: 0 80px;
  border-bottom: 2px solid #e7eaec;
  position: relative;
  padding-bottom: 50px;
  & > img {
    padding: 0 10px 10px 0;
  } 
  ${ButtonWrapper}{
    position: relative;
    top: 60px;
    left: 42%;
  }
`

const SectionImage = () => (
  <Container>
    <img src={ImageOne} alt=""/>
    <img src={ImageTwo} alt=""/>
    <img src={ImageThree} alt=""/>
    <img src={ImageFour} alt=""/>
    <Button
      textButton="Show me everything"
    />
  </Container>
)

export default SectionImage;