import FacebookLogo from '../../assets/FacebookLogo.png'
import DribbleLogo from '../../assets/DribbbleLogo.png'
import YoutubeLogo from '../../assets/YoutubeLogo.png'
import PinterestLogo from '../../assets/PinterestLogo.png'
import TwitterLogo from '../../assets/TwitterLogo.png'
import RedditLogo from '../../assets/RedditLogo.png'
import GoogleLogo from '../../assets/GoogleLogo.png'
import SlackLogo from '../../assets/SlackLogo.png'

import './servicead.css'

const ServiceAd = () => {
  return (
    <div className='service-container'>
      <div className='logos-container'>
        <div className='logo-bar'>
          <img src={FacebookLogo} alt=' ' />
          <img src={DribbleLogo} alt=' ' />
          <img src={YoutubeLogo} alt=' ' />
          <img src={PinterestLogo} alt=' ' />
          <img src={TwitterLogo} alt=' ' />
          <img src={RedditLogo} alt=' ' />
          <img src={GoogleLogo} alt=' ' />
          <img src={SlackLogo} alt=' ' />
        </div>

        <section className='services'>
          <h2>Secure your money with Escrow.</h2>
          <p>
            Spense uses Escrow to secure all payments. We believe Escrow offers
            the highest level of security for your payments so you never need to
            worry about scams.
          </p>
          <p>Learn more about Escrow</p>
        </section>
      </div>
    </div>
  )
}

export default ServiceAd
