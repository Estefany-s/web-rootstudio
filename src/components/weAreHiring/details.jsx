import styled from 'styled-components';

import HeaderTitle from '../studio/headerTitle';
import TextSubrayed from './textSubrayed';
import { InfoDevelopers } from './titleComplete';

const Wrapper = styled.div`
  display: block;
  text-align: center;
  & > p {
    font-size: 19px;
    width: 700px;
    margin: 0 auto;
    padding: 30px 0;
  }
  & .detailsBranding > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
  } & .detailsBranding > div > div {
    width: 21%;
    padding: 15px;
  }
  & .finally {
    display: inline-grid;
    margin: 35px 0 40px;
  }
`

const Details = () => {
  return (
    <Wrapper>
      <HeaderTitle weAreHiring textOne="What's life like at Root Studio?"/>
      <p>
        Lonconl is our home. Rich with history and intriguing architecture, a hub for art and technology and bustling via an 
        ever-growing supply of shops, restaurants and bars. We like to think that our small studio is a great place to work;
        friendly and informal with a positive approach to our staff's work/life balance.
      </p>
      <div className="detailsBranding">
        <div>
          <div>
            <TextSubrayed text="City centre"/>
            <p>Go aout and explore the cuty on your lunch break! With a city centre studio, all that Linconl has ti offer is just outside the door.</p>
          </div>
          <div>
            <TextSubrayed text="Work/life balance"/>
            <p>We do our best when we're happy and not stressed, so we make sure that everyone has a good balance.</p>
          </div>
          <div>
            <TextSubrayed text="Award winning"/>
            <p>Our work has won multiple awards over the years and we constantly strive to push the boundaries!</p>
          </div>
        </div>
        <div>
          <div>
            <TextSubrayed text="Team events"/>
            <p>We all enjoy an impromptu breakfast, night out or meal together. We're always on the look-out for a great conference too!</p>
          </div>
          <div>
            <TextSubrayed text="Learning"/>
            <p>As a small team we always like to push the boundaries of our knowledge and so learning new skills in the studio is encouraged.</p>
          </div>
          <div>
            <TextSubrayed text="Investment"/>
            <p>We like to invest in the best tools and the best equipment for our team and we welcome suggestions on new tools and kit from team members.</p>
          </div>
        </div>
      </div>
      <div className="finally">
        <TextSubrayed text="Did we mention we're looking for:"/>
        <InfoDevelopers>Web developer →</InfoDevelopers>
      </div>
    </Wrapper>
  )
}

export default Details;