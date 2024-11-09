import styled from 'styled-components';
import {Link} from 'react-router-dom';

import ItemsHeader from './itemsHeader';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  background-color: #f3d52f;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
  box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
`
const Branding = styled.p`
  font-size: 35px;
  line-height: 1.625rem;
  font-weight: lighter;
  letter-spacing: 1px;
  margin: 0;
  & > a {
    text-decoration: none;
    color: #000;
  }
  & > a > span  {
    font-weight: bold;
    color: #03293c;
  }
`

const HeaderComplete = ({studio}) => (
  <Container studio={studio}>
    <div>
      <Branding><Link to="/"><span>ROOT</span>STUDIO</Link></Branding>
    </div>
    <ItemsHeader/>
  </Container>
)

export default HeaderComplete;