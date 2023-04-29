"use client"

/* eslint-disable react/no-unescaped-entities */
import React from 'react';

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
type Props = {}


function ContactMe({ }: Props) {

    return (
        <div className='h-screen relative flex flex-col items-center justify-evenly text-center md:text-left md:felx-row max-w-7xl mx-auto'>
            <h3 className='absolute top-[6rem] md:top-20 lg:top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Contact
            </h3>
            <div className='flex flex-col mt-20'>
                <h4 className='text-4xl font-semibold text-center mb-5 underline decoration-[#240b12]'>
                    Let's talk
                </h4>
                <div className="space-y-5 md:space-y-5 mb-5">
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-xl">+917586894901</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-xl">maitykoustav2809@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-xl">Kolkata</p>
                    </div>
                </div>
                <form method='POST' action="https://getform.io/f/d9db5188-8b53-4cc2-882a-ab136bfb3051" className='flex flex-col space-y-2 w-fit mx-auto my-5 '>
                    <div className='flex space-x-2'>
                        <input type="text" name="name" placeholder='Name' className="contactInput" required />
                        <input type="email" name="email" placeholder='Email' className="contactInput" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" required />
                    </div>
                    <input type="text" name="subject" placeholder='Subject' className="contactInput" required />
                    <input type='tel' name="phone" placeholder='Phone Number' className="contactInput" required />
                    <textarea placeholder='Message' name="name" className="contactInput" required />
                    <button type="submit" className='bg-[#f7ab0a] py-5 rounded-md text-black font-bold text-lg hover:bg-blue-900 '>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe