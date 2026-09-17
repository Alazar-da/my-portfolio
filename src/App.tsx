import Navbar from './components/Navbar'
import Hero from './components/Home'
import About from './components/About'
import Process from './components/Process'
import Portfolio from './components/Portfolio'
import Project from './components/Project'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Fotter'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
     <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: 'var(--toast-bg, #191919)',
            color: 'var(--toast-fg, #e5e5e5)',
            border: '1px solid rgba(76,76,76,0.5)',
            borderRadius: '12px',
            fontSize: '14px',
          },
          success: { duration: 3000 },
          error: { duration: 3000 },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Process />
        <Portfolio />
        <Project />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
