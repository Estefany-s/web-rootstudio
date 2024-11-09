import styled from 'styled-components';

const Container = styled.div`

  & > img {
    position: relative;
    bottom: 200px;
    top: -100px;
  }
`
const ContentCard = styled.div`
  cursor: pointer;
  background-color: #fff;
  margin: 0 15px;
  position: ${(props) => props.cardStudio ? 'none' : 'relative'};
  bottom: 150px;
  width: 406px;
  &:hover {
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transform: scale(1.02);
  }
`
const ContentText = styled.div`
  padding: 24px;
  & > h2 {
    font-size: 16px;
    color: #d9004b;
    margin: 0 0 15px 0;
  }
`
const TextInfo = styled.p`
  color: #133547;
  font-size: 17px;
  margin: 0;
  &:hover {
    color: #d9004b;
  }
`
const SpanColor = styled.span`
  color: #d9004b;
`

const CardCover = ({titleCard, imageUrl, cardStudio}) => {
  return (
    <Container>
      <ContentCard cardStudio={cardStudio}>
        <img src={imageUrl} alt=""/>
        <ContentText>
          <h2>{titleCard}</h2>
          <TextInfo>
            Last year we designed fire engines, this year it's and astronaut school! Our new branding design for IASTI  
            is truly out of this world <SpanColor>⟶</SpanColor>
          </TextInfo>
        </ContentText>
      </ContentCard>
    </Container>
  )
}

export default CardCover;