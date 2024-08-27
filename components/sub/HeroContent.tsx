"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import { SparklesIcon } from '@heroicons/react/24/solid';
import Image from 'next/image'; // Import Image from next/image

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-between px-20 mt-40 w-full z-[20]" // Updated to flex-row and justify-between
    >
      {/* Left side content */}
      <div className='h-full w-full flex flex-col gap-5 justify-center text-start'>
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[10px] px-[20px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5' />
          <h1 className='Welcome-text text-bold text-[20px]'>Raihan Falah Rabbani</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
          Bachelor of
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'> Engineering Physics </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 mt-4 max-w-[600px]"
        >
          Have a strong background in instrumentation, electrical, communication, control, and monitoring systems, demonstrated through 3 internships, 10 projects, 5 organizations, and 2 international events. This experience highlights his ability to work effectively under pressure, take risks, and communicate proficiently in English.
        </motion.p>

        {/* <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a> */}
      </div>

      {/* Right side content */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-auto h-full flex justify-center items-center" // Removed flex-grow to fit naturally
      >
        <Image 
          src="/profil.svg"
          alt='work icons'
          height={850}
          width={850}
        />
      </motion.div>

    </motion.div>
  );
};

export default HeroContent;
