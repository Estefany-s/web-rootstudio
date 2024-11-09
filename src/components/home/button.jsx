import styled from 'styled-components';

export const Wrapper = styled.a`
  border: ${(props) => props.primario ? '2px solid #f7b633' : '1px solid #e6eaec'};
  padding: 16px 34px;
  background: ${(props) => props.notes ? ' #fef8e9' : '#fff'};
  text-decoration: none;
  color: #4d6672;    
  position: relative;
  top: 24px;
  &:hover {
    border-color: #f7b633;
    color: ${(props) => props.primario ? '#ffffff' : '#f7b633'};
    background-color: ${(props) => props.primario ? '#f7b633' : '#ffffff'}
  }
`

const Button = ({textButton, primario, notes}) => (
  <Wrapper primario={primario} notes={notes} href='/'>{textButton}</Wrapper>
)

export default Button;