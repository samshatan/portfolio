import './App.css'
import AboutSection from './mycomponents/AboutSection'
import ContactSection from './mycomponents/ContactSection'
import { DarkModeProvider } from './mycomponents/DarkModeProvider'
import Header from './mycomponents/Header'
import HeroSection from './mycomponents/HeroSection'
import ProjectsSection from './mycomponents/ProjectsSection'
import SkillsFlow from './mycomponents/SkillsFlow'
import SkillsSection from './mycomponents/SkillsSection'

function App() {
  return (
    <>
    <DarkModeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Header/>
      <HeroSection/>
      <AboutSection/>
      <div className="h-[600px] rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-900"><SkillsFlow/></div>
      <SkillsSection/>
      <ProjectsSection/>
      <ContactSection/>
    </DarkModeProvider>
    </>
  )
}

export default App
