import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Fotter from './components/Fotter';
function App() {

  return (
<>
  <header className='h-screen scroll-smooth transition duration-300 ease-in-out text-slate-900'>
    <Nav />
    <Home />
  </header>
  <main className='text-slate-900'>
    <About />
    <Process />
    <Portfolio/>
    <Project />
    <Skills/>
    <Testimonials/>
    <Contact/>
    <Fotter/>
  </main>
</>
  );
}

export default App;
