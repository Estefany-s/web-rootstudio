import styled from 'styled-components';

const Span = styled.span`
  font-size: 27px;
  font-weight: 800;
  font-family: auto;
  border-bottom: 1px solid #d9004b;
  margin: 0;
`

const TextSubrayed = ({text}) => {
  return (
    <Span>{text}</Span>
  )
}

export default TextSubrayed;