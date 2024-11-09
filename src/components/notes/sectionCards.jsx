import styled from 'styled-components';

import CardCover from '../cards/cardCover';
import Book from '../../images/book.jpeg';
import Poster from '../../images/poster.jpeg';
import Green from '../../images/green.jpeg';
import Yellow from '../../images/yellow.jpeg';
import Mural from '../../images/mural.jpeg';
import Telephone from '../../images/telephone.jpeg';
import People from '../../images/people.jpeg';
import Notebook from '../../images/notebook.jpeg';
import Girl from '../../images/girl.jpeg';
import Button, {Wrapper as ButtonWrapper} from '../../components/home/button';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fef8e9;
  & > div {
    border-bottom: 2px solid #d9004b;
    position: relative;
    bottom: 100px;
  }
  & > div > div{
    padding-bottom: 40px;
  } ${ButtonWrapper} {
    border: 2px solid #d9004b;
    margin: 0 auto;
    right: 65%;
    top: 9px;
    color: #d9004b;
    &:hover {
      background-color: #d9004b;
      color: #fff;
    } 
  }
`

const sectionCards = () => {
  return (
    <Wrapper>
      <div>
        <CardCover imageUrl={Book} titleCard="Article" />
        <CardCover imageUrl={Poster} titleCard="Project News" />
        <CardCover imageUrl={Green} titleCard="Projects News" />
      </div>
      <div>
        <CardCover imageUrl={Yellow} titleCard="Projects News" />
        <CardCover imageUrl={Mural} titleCard="Projects News" />
        <CardCover imageUrl={Telephone} titleCard="Projects News" />
      </div>
      <div>
        <CardCover imageUrl={People} titleCard="Studio News" />
        <CardCover imageUrl={Notebook} titleCard="Projects News" />
        <CardCover imageUrl={Girl} titleCard="Projects News" />
        <Button notes textButton="Older posts"/>
      </div>
    </Wrapper>
  )
}

export default sectionCards;