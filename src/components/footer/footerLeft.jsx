import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`
const ContentFooter = styled.div`

  & > span {
    font-weight: 700;
    color: #fff;
    display: block;
    margin-bottom: 8px;
  }
  margin-right: ${(props) => props.selected ? '120px' : '0'};
`
const Info = styled.p`
  color: #fff;
  margin: 2px 0;
  cursor: ${(props) => props.effectHover ? 'pointer' : ''};
  &:hover {
    color: ${(props) => props.effectHover ? '#f7b633' : 'none'};
  }
`

const FooterLeft = () => {
  return(
    <Container>
      <ContentFooter selected>
        <span>Lincoln</span>
        <Info effectHover>01522 528246</Info>
        <Info effectHover>design@rootstudio.co.uk</Info>
        <Info>The Terrace, Grantham</Info>
        <Info>Street, Lincoln, LN2 1BD</Info>
      </ContentFooter>
      <ContentFooter>
        <span>Leicester</span>
          <Info effectHover>0116 253 3454</Info>
          <Info effectHover>design@rootstudio.co.uk</Info>
          <Info>LCB Depot, 31 Rutland St,</Info>
          <Info>Leicester LE1 1RE</Info>
      </ContentFooter>
    </Container>
  )
}

export default FooterLeft;