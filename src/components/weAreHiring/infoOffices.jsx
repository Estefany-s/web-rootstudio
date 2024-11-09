import styled from 'styled-components';

import Office from '../../images/office.jpeg';
import Quote from './quote';
import Shoes from '../../images/shoes.jpeg';
import Church from '../../images/church.jpeg';

const Wrapper = styled.div`
  background-color: #fef8e9;
  margin-top: 180px;
  & > img {
    position: relative;
    bottom: 110px;
    width: 700px;
    height: 377px;
    margin: 0 auto;
    display: block;
  } & > p {
    font-size: 23px;
    width: 700px;
    margin: 0 auto;
    position: relative;
    bottom: 79px;
  } & > div {
    display: flex;
    & > img {
      width: 50%;
      padding-top: 80px;
    }
  }
`

const InfoOffices = () => {
  return (
    <Wrapper>
      <img src={Office} alt=""/>
      <p>
        At root studio we like to create a comfortable and creative working environment for our team. 
        fluffy novely slippers to the marvel that is the bean-to-cup coffee machine; our studio is 
        like a second home.
      </p>
      <Quote/>
      <div>
        <img src={Shoes} alt=""/>
        <img src={Church} alt=""/>
      </div>
    </Wrapper>
  )
}

export default InfoOffices;