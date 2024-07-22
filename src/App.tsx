import AnimatedBg from './components/AnimatedBg'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <AnimatedBg />
      <Header />
      <Hero />
      <div className=' h-[1000px]'></div>
      <Contact />
      <Footer />
    </>
  )
}

export default App
