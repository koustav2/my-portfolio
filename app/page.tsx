import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]'>
      <NavBar/>

      <section id="hero" className='snap-start'>
        <Hero/>
      </section>

      <section id="about" className='snap-center'>
        <About/>
      </section>

      <section id="skills" className='snap-start'>
        <Skills/>
      </section>

      <section id="projects" className='snap-center'>
        <Projects/>
      </section>
      <section id="contact" className='snap-start' >
        <ContactMe/>
      </section>

      <footer className='sticky bottom-5 w-full cursor-pointer italic uppercase text-[#f7ab0a]'>
        <a href="https://www.linkedin.com/in/koustav-maity-802072210/" target='_blank'>
          Koustav
        </a>
      </footer>
    </div>
  )
}
