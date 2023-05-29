/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
"use client"


import React from 'react'
import { motion } from 'framer-motion'
import amazon from '../public/img/amazon-1.png'
import logo  from '../public/img/logo.png'
import Image from 'next/image';

type Props = {}

function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}

            className='h-screen relative flex flex-col items-center justify-evenly text-left md:felx-row max-w-full mx-auto z-0 overflow-hidden'>
            <h3 className='absolute top-[7rem] md:top-20 lg:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>
            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]">

                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png"
                        alt=""
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <p className='text-center md:text-left md:text-xl lg:text-xl'>
                            Netflix 2.1 app that has a Log In and Log Out Authenticationh
                            with Google. It has a beautiful Home Screen with all the movies
                            looking just like Netflix.Created with react ,tailwind-css ,firebase and firebase-auth.
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://netflix-2-1.vercel.app/" target='__blank'>Demo</a>
                        </button>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://github.com/koustav2/Netflix-2.1" target='__blank'>Code</a>
                        </button>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/todo.png"
                        className='w-[450px] h-[300px]'
                        alt=""
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <p className='text-center md:text-left md:text-xl lg:text-xl'>
                            Created a responsive  TODO app using react , tailwind-css . used local-storage to save ,update and delete the existing todo
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://to-do-ten-rosy.vercel.app/" target='__blank'>Demo</a>
                        </button>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://github.com/koustav2/ToDo" target='__blank'>Code</a>
                        </button>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/snake-game.png"
                        className='w-[450px] h-[350px]'
                        alt=""
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <p className='text-center md:text-left md:text-xl lg:text-xl'>
                            Snake-game a is everyone;s childhood game .I just
                            replicate it using HTML, css and localstorage
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://snake-game-rosy-tau.vercel.app/" target='__blank'>Demo</a>
                        </button>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://github.com/koustav2/SnakeGame" target='__blank'>Code</a>
                        </button>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="https://raw.githubusercontent.com/koustav2/my-portfolio/main/public/img/Screenshot%202023-05-26%20113617.png?token=GHSAT0AAAAAAB5S4MYQM67UJMFE4X2H4TZMZDUK44Q"
                        className='w-[450px] h-[300px]'
                        alt=""
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <p className='text-center md:text-left md:text-xl lg:text-xl'>
                            Random quote generator created with css and react js.
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://random-quote-generator-app.vercel.app/" target='__blank'>Demo</a>
                        </button>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://github.com/koustav2/Random-Quote-Generator" target='__blank'>Code</a>
                        </button>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="https://raw.githubusercontent.com/koustav2/pics/main/weather-2.0.png"
                        className='w-[450px] h-[300px]'
                        alt=""
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <p className='text-center md:text-left md:text-xl lg:text-xl'>
                            weather 2.0 is a openweather-api based onprojects ,creted with React ,tailwind-wind.Its  it can fecth current weather
                            using geolocation and can show weather of certain cities
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://weather-2-0.vercel.app/" target='__blank'>Demo</a>
                        </button>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://github.com/koustav2/weather-2.0" target='__blank'>Code</a>
                        </button>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="https://raw.githubusercontent.com/koustav2/pics/main/weather-3.0.png"
                        className='w-[450px] h-[300px]'
                        alt=""
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <p className='text-center md:text-left md:text-xl lg:text-xl'>
                            weather 3.0 is a updated version of the weather 2.0 but different approach.It was created on NEXT-JS with the use of react,
                            tailwindcss and powered by Tremor 2.0, StepZen and more.It show weather data of every country and cities in the world
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://stepzen-weather-app-tau.vercel.app/" target='__blank'>Demo</a>
                        </button>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://github.com/koustav2/weather-3.0" target='__blank'>Code</a>
                        </button>
                    </div>
                </div>
                <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.img
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        src="https://raw.githubusercontent.com/koustav2/my-portfolio/main/public/img/amazon-1.png?token=GHSAT0AAAAAAB5S4MYRMRF5U3JDKOYSOWZ4ZDQN7XA"
                        className='w-[450px] h-[300px]'
                        alt=""
                    />
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <p className='text-center md:text-left md:text-xl lg:text-xl'>
                            Amazon 3.0 is a amazon clone .It was created on NEXT-JS with the use of react,
                            tailwindcss,redux and stripe api and more....It intregrated with stripe Api and stripe for doing payment after you select the items you want to buy
                            It is fully functinonal app which is also intregratyed with next auth and firebase for authentication.
                        </p>
                    </div>
                    <div className='flex gap-5'>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://amzon-2-0-git-main-maitykoustav865-gmailcom-s-team.vercel.app/" target='__blank'>Demo</a>
                        </button>
                        <button
                            type="button"
                            className="bg-yellow-600 hover:bg-yellow-700 py-3 px-8 rounded-lg text-yellow-100 border-b-4 border-yellow-700 hover:border-yellow-800 transition duration-300"
                            data-te-ripple-init>
                            <a href="https://github.com/koustav2/Amzon-2.0" target='__blank'>Code</a>
                        </button>
                    </div>
                </div>


            </div>
            <div className="w-full absolute top-[30% ] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
        </motion.div >
    )
}

export default Projects;
