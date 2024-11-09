import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: ${(props) => props.weAreHiring ? '100px' : '150px'};
  text-align: center;
  margin: 0 auto;
  width: ${(props) => props.work ? '54%' : '43%'}; 
  cursor: ${(props) => props.notes ? 'pointer' : ''};
  & > span {
    font-size: 41px;
    font-weight: 800;
    font-family: auto;
    border-bottom: 1px solid #d9004b;
    margin: 0;
  }
  &:hover {
  color: ${(props) => props.notes ? '#d9004b' : ''};
}
`

const headerTitle = ({work, textOne, textTwo, textThree, weAreHiring, notes}) => {
  return(
    <Wrapper 
      work={work} 
      weAreHiring={weAreHiring}
      notes={notes}
    >
      <span>{textOne}</span>
      <span>{textTwo}</span>
      <span>{textThree}</span>
    </Wrapper>
  )
}

export default headerTitle;