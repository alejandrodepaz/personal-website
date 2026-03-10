import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Resume from './components/Resume'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chat from './components/Chat'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Resume />
        <Projects />
        <Chat />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
