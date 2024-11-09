import styled from 'styled-components';

import HeaderTitle from '../studio/headerTitle';
import TextSubrayed from './textSubrayed';

const Wrapper = styled.div`

  & .text {
    display: flex;
    flex-direction: column;
    padding-top: 60px;
    align-items: center;
  }
  & .text > span {
    font-size: 27px;
    font-weight: 800;
    font-family: auto;
    border-bottom: 1px solid #d9004b;
  }
`
export const InfoDevelopers = styled.a`
  font-size: 41px;
  color: #d9004b;
  margin: 30px 0;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: #41a5e3;
  }
`

const titleComplete = () => {
  return (
    <Wrapper>
      <HeaderTitle
        textOne="Looking for a studio that you can "
        textTwo="call 'home'? sit down and put your "
        textThree="slippers on?"
      />
      <div className="text">
        <TextSubrayed text="We're currently looking for:"/>
        <InfoDevelopers href="/">Web developer →</InfoDevelopers>
      </div>
    </Wrapper>
  )
}

export default titleComplete;