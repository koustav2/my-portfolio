"use client"


import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

type Props = {}
// flex items-center justify-center text-center overflow-hidden
function Skills({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      
      className='h-screen flex relative text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 items-center'>
      <h3 className='absolute top-[7rem] md:top-20 lg:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
      </h3>
      <h3 className='absolute top-36 uppercaes tracking-[3px] text-gray-400'>Hover over for current proficiency status</h3>
      <div className='grid grid-cols-4 gap-5 mt-[260px]'>
        <Skill />

      </div>
    </motion.div>
  )
}

export default Skills