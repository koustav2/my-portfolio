"use client"


import React from 'react'
import { motion } from "framer-motion";
import pic2 from '../public/pic2.jpg'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mt-25'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-10'>
                About
            </h3>
            <motion.img
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[400px] mt-[9rem] md:mt-0 lg:mt-0'
                initial={{
                    x: -200,
                    opacity: 0
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,

                }}
                viewport={{
                    once: true,

                }}
                transition={{
                    duration: 1.5
                }}
                src="https://raw.githubusercontent.com/koustav2/pics/main/pic2.jpg"
                alt="pic2"
            />
            <div className="space-y-10  md:px-10 mt-[3rem] md:mt-0 lg:mt-0 md:text-xs">
                <h4 className="text-sm md:text-xl lg:text-4xl text-gray-400 font-bold">Here is a{" "}
                    <span className="border-b-2 border-b-[#000080] ">little</span>{" "} background</h4>
                <p className='text-gray-500 text-sm md:text-lg lg:text-xl'>
                    I'm koustav. here's a little bit about me... .I am a passionate Front-End Developer, driven by a deep love for
                    crafting seamless user experiences and bringing designs to life.I have coding for 1.5
                    years of now.. I have honed my skills in transforming design concepts into interactive websites, ensuring they are responsive, intuitive, and visually appealing across various devices and platforms
                    .my future goal is to be a full stack web developer ..I am good at{" "} <span className=' text-blue-800'>React,Tailwind-css, Javascript
                        MongoDb, Next-js,Redux and basic front-end </span>{" "} skills.I also have proficient knowledge in  <span className="text-lg font-bold">AWS</span>{" "}
                    cloud
                </p>
            </div>

        </motion.div>
    )
}