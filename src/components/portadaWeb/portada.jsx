import styled from 'styled-components';

import ReactPlayer from 'react-player';
import Video from '../../images/ident.mp4';

const PrincipalSection = styled.section`
  background: #f6da37;
  text-align: center;
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 20px;
`
const ContainerTextBottom = styled.div`
  position: absolute;
  left: 42%;
  bottom: 11%;
  &:hover {
    color: white;
  }
`
const MoreInformation = styled.div`
  font-size: 26px;
  font-weight: 200;
  margin: 0;
`
const MoreInformationComplement = styled.p`
  font-size: 26px;
  font-weight: bold;
  margin: 0;
` 

const Portada = () => (
  <PrincipalSection>
    <ReactPlayer
      url={Video}
      width='100%'
      height='100%'
      playing
      loop
      muted
    />
    <ContainerTextBottom>
      <MoreInformation>See our work for</MoreInformation>
      <MoreInformationComplement>Chester zoo</MoreInformationComplement>
    </ContainerTextBottom>
  </PrincipalSection>
)

export default Portada;