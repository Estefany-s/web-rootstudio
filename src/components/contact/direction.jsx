import styled from 'styled-components';

import Building from '../../images/building.jpeg';
import DirectionCard from './directionCard';

const Wrapper = styled.div`

  & .cardMap {
    display: flex;
    justify-content: center;
  }
`
const Content = styled.div`
  background: #fef8e9;
  margin-top: 20%;
  padding-bottom: 80px;
  & > div {
    text-align: center;
    position: relative;
    bottom: 145px;
  } & > div > p {
    font-size: 23px;
    margin: 0 auto;
    padding: 50px 0;
    width: 29%;
  }
`

const Direction = () => {
  return (
    <Wrapper>
      <Content>
        <div>
          <img src={Building} alt=""/>
          <p>
            Have an exciting new aventure in mind? like to know about our services and how we can help
            your business? Every new project stats with a onversation so le't grab a coffee and talk about you.
          </p>
        </div>
      </Content>
      <div className="cardMap">
        <DirectionCard number="01522 528246" adress="The Terrace, Grantham Street, Lincoln, LN2 1BD"/>
        <DirectionCard number="0116 253 3454" adress="AddressLCB Depot, 31 Rutland St, Leicester LE1 1RE"/>
      </div>
    </Wrapper>
  )
}

export default Direction;