import Header from '../components/header/headerSecondary';
import HeaderTitle from '../components/studio/headerTitle';
import SectionCards from '../components/studio/sectionCards';
import InfoAdditional from '../components/studio/infoAdditional';
import Note from '../components/home/note';
import councilLogo from '../images/councilLogo.gif';
import Footer from '../components/footer/footerComplete';

const Studio = () => {
  return (
    <div>
      <Header/>
      <HeaderTitle 
        textOne="We produce creative and "
        textTwo="innovative desing for brands "
        textThree="worldwide"
      />
      <SectionCards/>
      <InfoAdditional/>
      <Note logoUrl={councilLogo} noteStudio/>
      <Footer/>
    </div>
  )
}

export default Studio;