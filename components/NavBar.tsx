"use client"

import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Link from 'next/link';


type Props = {}

function NavBar({ }: Props) {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center'>
        <SocialIcon url="https://www.linkedin.com/in/koustav-maity-802072210/" fgColor='blue' bgColor='transparent' target='__blank' />
        <SocialIcon url="https://github.com/koustav2" fgColor='pink' bgColor='transparent' target='__blank' />
        <SocialIcon url="https://www.facebook.com/koustav.maity.796" fgColor='blue' bgColor='transparent' target='__blank' />

      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{ duration: 1.5 }}
        className='flex flex-row items-center gap-2 text-gray-400'>
        <div className='text-gray-400 mt-4'>
          <Link 
          onClick={() => window.open('/Resume.pdf', 'Resume', 'width=800,height=600')} href={''}>
            <h1 className='uppercase text-sm link link-underline link-underline-black hover:text-pink-500'>Resume</h1>
          </Link>
        </div>
        <a href="mailto:maitykoustav2809@gmail.com" className='text-gray-400 mt-4'>
          <h1 className='uppercase text-sm link link-underline link-underline-black hover:text-pink-500'>Email</h1>
        </a>
      </motion.div>

    </header>
  )
}

export default NavBar