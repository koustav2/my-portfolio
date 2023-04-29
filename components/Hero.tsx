/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Image from 'next/image'
import myimg from '../public/myimg.jpg';
import Link from 'next/link'



type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, My name is Koustav", "A tech nerd", "<I love web dev/>"],
        loop: true,
        delaySpeed: 100,
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircle />
            <Image
                src={myimg}
                alt='user profile picture'
                width={110}
                height={110}
                className='rounded-full relative  mx-auto object-cover'
            />
            <div className='z-20'>
                <h2 className='text-sm font-bold text-gray-500 tracking-[15px] text-center'>
                    Front-End Developer
                </h2>

                <h1 className='text-2xl lg:text-4xl font-semibold scroll-px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className='pt-5'>
                    <Link href="#about" scroll={false}>
                        <button className="heroButton  hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">About</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton  hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton  hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Projects</button>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Hero