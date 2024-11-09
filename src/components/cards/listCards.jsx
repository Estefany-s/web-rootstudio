import styled from 'styled-components';

import CardCover from './cardCover';
import Girl from '../../images/girl.jpeg';
import Book from '../../images/book.jpeg';
import Poster from '../../images/poster.jpeg';

const Wrapper = styled.div`
  background-color: #fef8e9;
  display: flex;
  justify-content: center;
`

const ListCards = () => {
  return (
    <Wrapper>
      <CardCover
        titleCard="Project News"
        imageUrl={Girl}
      />
      <CardCover
        titleCard="Article"
        imageUrl={Book}
      />
      <CardCover
        titleCard="Project News"
        imageUrl={Poster}
      />
    </Wrapper>
  )
}

export default ListCards