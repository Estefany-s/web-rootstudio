import styled from 'styled-components';
import {Link} from 'react-router-dom';

import ItemsHeader from './itemsHeader';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  align-items: center;
  background-color: #ffffff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
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

const HeaderComplete = () => (
  <Container>
    <div>
      <Branding><Link to="/"><span>ROOT</span>STUDIO</Link></Branding>
    </div>
    <ItemsHeader 
      headerStudio
      contact
    />
  </Container>
)

export default HeaderComplete;