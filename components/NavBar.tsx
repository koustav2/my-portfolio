"use client"

import React from 'react'
import {SocialIcon }  from 'react-social-icons';
import { motion } from "framer-motion";


type Props = {}

function NavBar({ }: Props) {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div 
      initial={{
        x:-500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{ duration: 1.5 }}
      className='flex flex-row items-center'>
        <SocialIcon url="https://www.linkedin.com/in/koustav-maity-802072210/" fgColor='gray' bgColor='transparent' target='__blank' />
        <SocialIcon url="https://github.com/koustav2" fgColor='gray' bgColor='transparent' target='__blank'/>
        <SocialIcon url="https://www.facebook.com/koustav.maity.796" fgColor='gray' bgColor='transparent' target='__blank'/>

      </motion.div>
      <motion.div
      initial={{
        x:500,
        opacity:0,
        scale:0.5
      }}
      animate={{
        x:0,
        opacity:1,
        scale:1
      }}
      transition={{ duration: 1.5 }}
       className='flex flex-row items-center text-gray-400'>
        <a href="mailto:maitykoustav2911@gmail.com" className='text-gray-400 mt-4'>
          <h1 className='uppercase text-sm link link-underline link-underline-black hover:text-pink-500'>Get In Touch</h1>
        </a>
      </motion.div>
    </header>
  )
}

export default NavBar