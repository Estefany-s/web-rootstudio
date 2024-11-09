import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  & .comments {
    width: 357px;
    margin-right: 30px;
  }
  & .comments > span {
    color: #d9004b;
    font-size: 30px;
  }
  & .comments > p {
    font-style: italic;
    font-size: 19px;
  }
  & .moreInfo > p{
    width: 400px;
    font-size: 19px;
    margin: 0;
  } 
`

const Quote = () => {
  return (
    <Wrapper>
      <div className="comments">
        <span>
          "A sense of fun that is passed through all aspects of a project"
        </span>
        <p>James</p>
      </div>
      <div className="moreInfo">
        <p>
          We specialise in bold and experimental design and always apply a new type of thinking to our projects,
          bringing with it a passion for creative problem solving. On top of this we take great pride in our friendly and efficient customer services, 
          building long-lasting connections with our clients.
        </p>
      </div>
    </Wrapper>
  )
}

export default Quote;