import styled from 'styled-components';

import HeaderTitle from '../studio/headerTitle';

const Wrapper = styled.div`
  margin-bottom: 300px;
  & > p {
    position: absolute;
    top: 100px;
    left: 46%;
    font-size: 18px;
  }
  & > span {
    margin: 21px 0;
    display: flex;
    justify-content: center;
    color: #d9004b;
    font-weight: bold;
  }
`

const Title = () => {
  return (
    <Wrapper>
      <p>Latest post:</p>
      <HeaderTitle
        notes
        textOne="Our new branding design for "
        textTwo="IASTI is truly out of this world"
      />
      <span>Project News</span>
    </Wrapper>
  )
}

export default Title;