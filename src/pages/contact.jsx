import Header from '../components/header/headerSecondary';
import HeaderTitle from '../components/studio/headerTitle';
import Direction from '../components/contact/direction';
import Footer from '../components/footer/footerComplete';

const Contact = () => {
  return (
    <div>
      <Header/>
      <HeaderTitle 
        textOne="If you want to chat about your "
        textTwo="project just get in touch. We'd "
        textThree="really like yo help out!"
      />
      <Direction/>
      <Footer/>
    </div>
  )
}

export default Contact;