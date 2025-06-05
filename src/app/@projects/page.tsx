import React from 'react'
import Card from '@/app/components/Card'
import { CircleArrowRight } from 'lucide-react';
import Link from 'next/link';

const Projects = () => {
  return (
    <>

      <div className="min-h-screen pb-10 h-fit bg-gradient-to-b from-black via-gray-900 to-gray-800 px-8 flex flex-col items-center justify-start gap-16">
        <h1 className="py-10 flex justify-center items-center text-center w-full text-6xl md:text-8xl font-extrabold bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent drop-shadow-lg">
          Projects
          <Link href="./projects">
            <CircleArrowRight className="font-bold mt-3 ml-6 w-10 h-10 text-white hover:text-gray-300 transition" />
          </Link>
        </h1>
        <div className="mt-10 mx-auto flex gap-8 h-content items-center justify-center flex-wrap">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Projects