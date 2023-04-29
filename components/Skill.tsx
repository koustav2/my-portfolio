"use client"


import React from 'react'
import { motion } from "framer-motion";
import sanity from './../public/sanity.png'

type Props = {
    directionLeft?: boolean;
}

function Skill({ directionLeft }: Props) {
    return (
        <>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/firebase.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>60%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/sanity.webp"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>30%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/aws.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>80%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/css.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>100%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/html.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>100%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/javascript.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>90%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/react.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>80%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/mysql.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>60%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/tailwind.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>80%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/nextjs-icon.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>50%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/mongo.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>50%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://raw.githubusercontent.com/koustav2/portfolio/main/src/assets/typescript.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>20%</p>
                    </div>
                </div>
            </div>
            <div className='group relative flex cursor-pointer'>
                <motion.img
                    src="https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
                    initial={{
                        x: directionLeft ? -200 : 200,
                        opacity: 0
                    }}
                    transition={{ duration: 1 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className='rounded-full border border-gray-500 object-cover w-20 h-20 md:w-28 md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out'
                />
                <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-20 w-20 md:w-28 md:h-28 xl:w-28 xl:h-28 rounded-full z-0'>
                    <div className="flex items-center justify-center h-full">
                        <p className='text-xl font-bold text-black opacity-100'>60%</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill