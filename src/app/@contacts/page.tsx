import React from 'react'
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Contacts = () => {
  return (
    <div id='contact' className={`flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-600  ${montserrat.className}`}>
      <div className="bg-gradient-to-b from-black to-gray-800 via-gray-900  backdrop-blur-md rounded-2xl shadow-2xl px-15 py-12  flex flex-col items-center gap-8 w-content max-w-[90vw]">
        <h2 className="text-3xl font-bold text-gray-100 tracking-tight mb-2">Get in Touch</h2>
        <div className="flex gap-8">
          <a
            href="https://www.linkedin.com/in/suzanmansuri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="group"
          >
            <FaLinkedin className="text-blue-400 group-hover:text-blue-600 transition text-4xl drop-shadow" />
          </a>
          <a
            href="https://github.com/lilblackboot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="group"
          >
            <FaGithub className="text-white group-hover:text-gray-700 transition text-4xl drop-shadow" />
          </a>
          <a
            href="https://x.com/lilblackboot"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="group"
          >
            <FaXTwitter className="text-white group-hover:text-gray-700 transition text-4xl drop-shadow" />
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-300 text-base">Email me at</span>
          <a
            href="mailto:suzanmansuri0000@gmail.com"
            className="text-lg font-semibold text-black bg-yellow-400 px-4 mx-5 py-2 rounded-lg shadow hover:bg-gray-700 transition"
          >
            suzanmansuri0000@gmail.com
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contacts