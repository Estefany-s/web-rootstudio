import styled from 'styled-components';

const Container = styled.div`
  margin: 80px 200px;
`
const ParagraphDiv = styled.div`
  display: flex;
  color: #03293c;
  & > p {
    margin: 0;
    padding-right: 40px;
  }
`
const Title = styled.span`
  font-size: 41px;
  font-weight: 800;
  font-family: auto;
  border-bottom: 1px solid #d9004b;
`
const TitleSecondary = styled.p`
  font-size: 41px;
  font-weight: 300;
  color: #03293c;
  margin: 0 0 50px 0;
  border-bottom: 1px solid #d9004b;
  width: 415px;
`
const ParagraphOne = styled.p`
  font-size: 23px;
`
const ParagraphTwo = styled.p`
  font-size: 19px;
`

const AgencyInformation = () => (
  <Container>
    <Title>Well hello there,</Title>
    <TitleSecondary>make yourself at home</TitleSecondary>
    <ParagraphDiv>
      <ParagraphOne>
        We're graphic and digital design agency working with clients worldwide deliver unforgettable projects. Working together 
        we help establishedbrands and ambitios startups achieve their full potential.
      </ParagraphOne>
      <ParagraphTwo>
        Our award winning team hac=ve brought great design and creative strategy to authentic brands for over 13 years. From 
        branding, print web design, digital marketing and ilustartion; our diverse range of skills allow us to focus on the why 
        not just the how, allowing for more effective experiences of your brand for your costumers.
      </ParagraphTwo>
    </ParagraphDiv>
  </Container>
)

export default AgencyInformation;