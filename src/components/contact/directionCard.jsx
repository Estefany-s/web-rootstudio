import styled from 'styled-components';

import mapCard from '../../images/mapOne.png';

const Wrapper = styled.div`
  display: inline-block;
  margin: 40px 15px;
  position: relative;
  bottom: 200px;
  
  & > div  {
    & > p {
      margin: 8px 0 0;
    }
    & > p > span {
      color: #d9004b;
      font-weight: bold;
      font-size: 17px;
      margin-right: 7px;
    }
  }
`
const Map = styled.img`
  width: 462.5px;
  height: 330px;
`

const DirectionCard = ({number, adress}) => {
  return (
    <Wrapper>
      <Map src={mapCard} alt=""/>
      <div>
        <h3>Linconl</h3>
        <p><span>Tel</span>{number}</p>
        <p><span>Email</span>design@rootstudio.co.uk</p>
        <p>{adress}</p>
      </div>
    </Wrapper>
  )
}

export default DirectionCard;