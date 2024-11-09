import styled from 'styled-components';

import Cards from '../cards/cardCover';
import telephone from '../../images/telephone.jpeg';
import mural from '../../images/mural.jpeg';
import notebook from '../../images/notebook.jpeg';

const Wrapper = styled.div`
  background-color: #fef8e9;
  padding: 100px 0 80px;
  margin-top: 90px;
  & > div {
    display: flex;
    margin: 0 200px 150px;
    & > p {
      margin: 0;
    }
    & .paddingRight {
      padding-right: 40px;
      font-size: 23px;
      width: 100%;
    }
    & .sizeSmall {
      width: 100%;
      font-size: 19px;
    }
  }
  & .cards {
    display: flex;
    padding-bottom: 20px;
    justify-content: center;
  }
`

const SectionCards = () => {
  return (
    <Wrapper>
      <div>
        <p className="paddingRight">
          We buld personalities through clever branding, brind ideas to like through our love for print and develop engaging 
          experiences with web design and digital marketing.
        </p>
        <p className="sizeSmall">
          We offer a truly collaborative design process, working alongside our customers to identify the right path to 
          launching successful brands, products, campaigns and events. We have a desire to learn and an unwillingness to 
          settle and with 13 years of experience in a wide range of sectors, we offer a fresh perspective to your creative 
          problems and are determined to reach the very best results for your business.
        </p>
      </div>
      <div className="cards">
        <Cards
          cardStudio
          imageUrl={telephone}
          titleCard="Digital marketing"
        />
        <Cards
          cardStudio
          imageUrl={mural}
          titleCard="Branding"
        />
        <Cards
          cardStudio
          imageUrl={notebook}
          titleCard="Design for print"
        />
      </div>
    </Wrapper>
  )
}

export default SectionCards