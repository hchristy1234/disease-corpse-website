import React, { useState } from 'react';
import game from '../images/game.svg';

function HeroHome() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#fae8ca" offset="0%" />
              <stop stopColor="#c1f5ee" offset="77.402%" />
              <stop stopColor="#d7f5f1" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      {/* <div className="absolute left-1/2 transform -translate-x-2/3 bottom-0 pointer-events-none" aria-hidden="true">
        <img className="mb-12 opacity-50" src={game} width="600" height="150" alt="puzzle" />
      </div> */}


      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="drop-shadow-md text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Disease <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-400">Corp(se)</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="drop-shadow-sm font-medium text-xl text-gray-900 mb-8" data-aos="zoom-y-out" data-aos-delay="150">A virtual escape room by BYD Inc.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-gradient-to-r from-orange-500 to-teal-400 w-full mb-4 sm:w-auto sm:mb-0 rounded-full" href="https://github.com/hchristy1234/Disease-Corpse">Download Now</a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;