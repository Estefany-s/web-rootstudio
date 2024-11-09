import Header from '../components/header/headerSecondary';
import HeaderTitle from '../components/studio/headerTitle';
import Galeria from '../components/works/galeria';
import Note from '../components/home/note';
import logoWork from '../images/logoNoteWork.gif';
import Footer from '../components/footer/footerComplete';

const Work = () => {
  return(
    <div>
      <Header/>
      <HeaderTitle 
        work
        textOne="We've worked with some amazing "
        textTwo="businesses, here are a few of our "
        textThree="favourites..."
      />
      <Galeria/>
      <Note noteSecondary logoUrl={logoWork}/>
      <Footer/>
    </div>
  )
}

export default Work;