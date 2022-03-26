import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Nav from './components/Nav/Nav'
import ServiceAd from './components/ServiceAd/ServiceAd'

function App() {
  return (
    <div className='app'>
      <div className='container1'>
        <div className='wrapper-top'>
          <Header />
          {/* -- Nav --  */}
          <Nav />
          <Hero />
          {/*  -- Social Media Icon Row -- */}
        </div>
      </div>
      <div className='container2'>
        <div className='wrapper-middle'>
          <ServiceAd />
        </div>
        {/*  -- Hero 2 --  */}
        {/*  -- Call to Action */}
        {/*  -- Footer -- */}
      </div>
    </div>
  )
}

export default App
