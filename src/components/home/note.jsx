import styled from 'styled-components';

import Button, {Wrapper as ButtonWrapper} from '../home/button';

const Container = styled.div`
  padding-bottom: ${(props) => props.noteSecondary ? '120px' : '250px'}; 
  text-align: center;
  & > img {
    margin-top: 70px;
  }
  & > .bubble{
    border: 1px solid #c7e4f7;
    margin: 0 auto;
    width: 45%;
    align-items: center;
    padding: 40px 40px 50px;
    & > p {
      font-size: 20px;
      text-align: center;
      margin: 0;
    }
  }

  ${ButtonWrapper}{
    margin: 0 auto;
    position: relative;
    top: -10px;
  }
`

const Note = ({logoUrl, noteSecondary}) => (
  <Container noteSecondary={noteSecondary}>
    <img src={logoUrl} alt="gif"/>
    <div className="bubble">
      <p>
        The team listen and respond positively to feedback when tacklingn our challenging 
        requests. If you are looking for designers that provide a professional and collaborative approach then we can't recommend
        Root Studio enough.
      </p>
    </div>
    <Button textButton="See Case Study" primario/>
  </Container>
)

export default Note;