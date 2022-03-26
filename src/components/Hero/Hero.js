import './hero.scss'
import Check from '../../assets/Checkmark.svg'
import HeroDesktop from '../../assets/HeroDesktop.png'
import HeroMobile from '../../assets/HeroMobile.png'
import HeroTablet from '../../assets/HeroTablet.png'

const Hero = () => {
  return (
    <div className='hero-container'>
      <div className='hero-img-container'>
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
      <section className='hero-details'>
        <div className='intro-text'>
          <h1 className='hero-title'>
            Share your unfiltered thoughts. Get Paid.
          </h1>
          <p>
            Spense is an open platform for individuals to share their unfiltered
            thoughts. Discuss the topics you love, and get paid for doing{' '}
            <em>just </em>that.
          </p>
        </div>
        <div className='benefits'>
          <div className='benefit-container'>
            <img src={Check} alt='Keep 99%' className='check' />
            <p className='benefit'>Receive 99% of the earnings</p>
          </div>

          <div className='benefit-container'>
            <img src={Check} alt='Various payment options' className='check' />
            <p className='benefit'>Get paid via Debit Card, ACH, or PayPal.</p>
          </div>

          <div className='benefit-container'>
            <img src={Check} alt='Withdraw anytime' className='check' />
            <p className='benefit'>Withdraw your earnings anytime.</p>
          </div>
        </div>
        <div className='cta-container'>
          <input
            type='email'
            name='email'
            id='cta-email'
            placeholder='john@example.com'
          />
          <button className='cta-button'>Get Started</button>
        </div>
      </section>
    </div>
  )
}

export default Hero
