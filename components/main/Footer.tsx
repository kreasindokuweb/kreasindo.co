import React from 'react';
import { FaInstagram, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <section id='about-me'>
      <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
        <div className="w-full flex flex-col items-center justify-center m-auto">
          <div className="mb-[5px] font-bold text-[25px] text-center">
            About me.
          </div>
          <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
            <a
              href="https://www.linkedin.com/in/raihanfalah/"
              target="_blank"
              rel="noopener noreferrer"
              className="block min-w-[200px] h-auto flex flex-col items-center justify-center border border-blue-500 rounded-lg p-4 bg-transparent my-[15px] cursor-pointer text-inherit no-underline relative z-20"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaLinkedin className="text-blue-500" />
              <span className='text-[15px] mt-[6px]'>raihanfalah</span>
            </a>
            <a
              href="https://instagram.com/raihanfalahh"
              target="_blank"
              rel="noopener noreferrer"
              className="block min-w-[200px] h-auto flex flex-col items-center justify-center border border-blue-500 rounded-lg p-4 bg-transparent my-[15px] cursor-pointer text-inherit no-underline relative z-20"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaInstagram className="text-blue-500" />
              <span className='text-[15px] mt-[6px]'>raihanfalahh</span>
            </a>
            <a
              href="mailto:raihqnfalah@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block min-w-[200px] h-auto flex flex-col items-center justify-center border border-blue-500 rounded-lg p-4 bg-transparent my-[15px] cursor-pointer text-inherit no-underline relative z-20"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <FaMailBulk className="text-blue-500" />
              <span className='text-[15px] mt-[6px]'>raihqnfalah@gmail.com</span>
            </a>
          </div>
          <div className="mt-[20px] mb-[20px] text-[15px] text-center">
            &copy; WebChain Dev 2024 Inc. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
