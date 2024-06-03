import React from 'react'
import MainHeader from './components/MainHeader'
import HeroSec from './components/HeroSec'
import FreeDelivery from './components/FreeDelivery'
import Enjoy from './components/Enjoy'
import Menu from './components/Menu'
import NumberSection from './components/NumberSection'
import OrderNow from './components/OrderNow'
import GallerySection from './components/GallerySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
function Home() {
  return (
    <div>
        <MainHeader />
        <FreeDelivery /> 
        <Enjoy />
        {/* <Menu /> */}
        <NumberSection />
        <GallerySection />
        <OrderNow />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default Home