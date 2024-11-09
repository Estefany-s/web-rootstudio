import styled from 'styled-components';

import FooterLeft from './footerLeft';
import FooterRight from './footerRight';

const ContainerFooter = styled.footer`
  background-color: #d9004b;
  display: flex;
  padding: 60px;
  justify-content: space-between;
`

const FooterComplete = () => {
  return (
    <ContainerFooter>
      <FooterLeft/>
      <FooterRight/>
    </ContainerFooter>
  )
}

export default FooterComplete;