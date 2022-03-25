import './hero.scss'
import HeroDesktop from '../../assets/HeroDesktop.png'
import HeroMobile from '../../assets/HeroMobile.png'
import HeroTablet from '../../assets/HeroTablet.png'

const Hero = () => {
  return (
    <div>
      <img
        className='hero-image'
        alt='Hero'
        src={HeroTablet}
        srcSet={`
        ${HeroMobile} 576w,
        ${HeroTablet} 768w,
        ${HeroDesktop} 992w 
      `}
      />
    </div>
  )
}

export default Hero
