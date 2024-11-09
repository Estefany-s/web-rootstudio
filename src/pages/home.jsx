import Header from '../components/header/headerComplete';
import Portada from '../components/portadaWeb/portada';
import AgencyInformation from '../components/home/agencyInformation';
import SectionImage from '../components/home/sectionImage';
import Note from '../components/home/note';
import Cards from '../components/cards/listCards';
import Footer from '../components/footer/footerComplete';
import MissionBurrito from '../images/missionBurrito.gif';

const Home = () => {
  return (
    <div>
      <Header/>
      <Portada/>
      <AgencyInformation/>
      <SectionImage/>
      <Note logoUrl={MissionBurrito}/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default Home;