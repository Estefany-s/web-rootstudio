import styled from 'styled-components';

import Facebook from '../../images/facebook.svg';
import Instagram from '../../images/instagram.svg';
import Dribbble from '../../images/dribbble.svg';
import Twitter from '../../images/twitter.png';
import In from '../../images/in.svg';

const Container = styled.div`
  display: flex;
  
  & > .right{
    display: flex;
    flex-direction: column;
    & > div > a > img {
      width: 25px;
      height: 25px;
      margin-top: 8px;
      margin-right: 20px;
      margin-bottom: 40px;
      cursor: pointer;
    } & > span {
      color: #fff;
      font-weight: bold;
    } & > p {
      color: #fff;
      margin: 4px 0;
    } &:hover > p {
      cursor: pointer;
      color: #f7b633;
    }
  }
  `
const ContentRight = styled.div`
  margin-right: ${(props) => props.selected ? '120px' : '0'};
`

const FooterRight = () => {
  return(
    <Container>
      <ContentRight selected className="right">
        <span>Policies</span>
        <p>Privacy policy</p>
      </ContentRight>
      <div className="right">
        <span>Follow us</span>
        <div>
          <a href="https://www.facebook.com/rootstudiouk"><img src={Facebook} alt="" /></a>
          <a href="https://www.instagram.com/rootstudiouk/"><img src={Instagram} alt=""/></a>
          <a href="https://twitter.com/rootstudiouk"><img src={Twitter} alt=""/></a>
          <a href="https://dribbble.com/rootstudio"><img src={Dribbble} alt=""/></a>
          <a href="/"><img src={In} alt=""/></a>
        </div>
        <span>© Root Studio</span>
      </div>
    </Container>
  )
}

export default FooterRight;