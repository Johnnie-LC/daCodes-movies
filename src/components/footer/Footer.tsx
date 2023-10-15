import { AWSIcon } from '../icons/AWSIcon'
import { BestIcon } from '../icons/BestIcon'
import { EFIIcon } from '../icons/EFIIcon'
import { GreatPlaceIcon } from '../icons/GreatPlaceIcon'
import { WaveSplitter } from './WaveSplitter'
import { Footer, FooterSection, IconContainer } from './style'

export const FooterDacode = () => {
  const DaCodesOverview = {
    title: 'We are coding the world of Tomorrow _',
    overview: 'DaCodes es una de las mejores empresas de desarrollo de software en México y LATAM. Lo que nos separa de los demás es el nivel de involucramiento que tenemos en nuestros proyectos y la pasión que tenemos por desarrollar productos digitales de calidad mundial. Somos un equipo de 220+ dacoders especializados en la planeación, diseño, desarrollo, implementación e innovación continua de productos digitales disruptivos.'
  }

  return (
    <Footer>
      <WaveSplitter />
      <FooterSection>
        <h3>{DaCodesOverview.title}</h3>
        <p>
          {DaCodesOverview.overview}
        </p>
        <IconContainer>
          <BestIcon />
          <GreatPlaceIcon />
          <EFIIcon/>
          <AWSIcon/>
        </IconContainer>
      </FooterSection>
    </Footer>
  )
}
