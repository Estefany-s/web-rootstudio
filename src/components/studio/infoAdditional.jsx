import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 350px;
  padding: 80px 0;
  & > p {
    font-size: 23px;
    & > span {
      color: #d9004c;
      cursor: pointer;
    }
  }
`

const InfoAdditional = () => {
  return (
    <Wrapper>
      <p>
        We provide outstanding quality products and services delivering premium value to our customers. We give every project
        the attention it deserves and strive for excellence in all areas.
      </p>
      <p>
        The team takes immense pride not only in the creative and technical work we produce, but also in our swift response time and
        exceptional customer service. We love <span>great design</span> and thrive on the enthusiasm of the businesses we work with on a daily basis.
        If your business is ready for a new kind of thinking please do <span>get in touch!</span>
      </p>
    </Wrapper>
  )
}

export default InfoAdditional;