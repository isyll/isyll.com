import { About } from './components/About'
import AnimatedBg from './components/AnimatedBg'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'

function App() {
  return (
    <main id='home'>
      <AnimatedBg />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Contact />
      <div className=' h-[1000px]'></div>
      <Footer />
    </main>
  )
}

export default App
