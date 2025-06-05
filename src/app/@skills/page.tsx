import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

function page() {
  return (
    <>
      <section id='skills' className="w-full min-h-screen gap-20 flex flex-col items-center justify-center bg-black relative px-4 sm:px-8 py-10">
        <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold text-white mb-10 text-center">
          Skills
        </h1>
        <div className={`flex flex-col md:flex-row gap-10 md:gap-6 sm:items-baseline-last justify-center items-stretch w-full max-w-6xl text-white ${montserrat.className}`}>
          {/* Frontend */}
          <div className="flex-1 flex flex-col items-center mb-8 md:mb-0">
            <div className="flex flex-wrap gap-3 justify-center">
              <SkillTab label="React" />
              <SkillTab label="Next.js" />
              <SkillTab label="Tailwind CSS" />
              <SkillTab label="HTML5" />
              <SkillTab label="CSS3" />
              <SkillTab label="JavaScript" />
              <SkillTab label="TypeScript" />
              <SkillTab label="Redux" />
              <SkillTab label="Framer Motion" />
              <SkillTab label="GSAP" />
            </div>
            <h3 className="text-base sm:text-lg my-4 text-gray-400">Frontend</h3>
          </div>
          {/* Backend */}
          <div className="flex-1 flex flex-col items-center mb-8 md:mb-0">
            <div className="flex flex-wrap gap-3 justify-center">
              <SkillTab label="Node.js" />
              <SkillTab label="Express.js" />
              <SkillTab label="MongoDB" />
              <SkillTab label="PostgreSQL" />
              <SkillTab label="Firebase" />
              <SkillTab label="REST APIs" />
              <SkillTab label="Prisma" />
            </div>
            <h3 className="text-base sm:text-lg my-4 text-gray-400">Backend</h3>
          </div>
          {/* Others */}
          <div className="flex-1 flex flex-col items-center">
            <div className="flex flex-wrap gap-3 justify-center">
              <SkillTab label="Git" />
              <SkillTab label="Figma" />
              <SkillTab label="Jest" />
              <SkillTab label="Vercel" />
              <SkillTab label="Linux" />
              <SkillTab label="Postman" />
            </div>
            <h3 className="text-base sm:text-lg my-4 text-gray-400">Others</h3>
          </div>
        </div>
      </section>
    </>
  )
}

// Skill tab component
function SkillTab({ label }: { label: string }) {
  return (
    <span className="px-4 py-2 text-gray-100 rounded-full border border-gray-100 font-semibold text-sm sm:text-base shadow hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-all duration-200 cursor-default">
      {label}
    </span>
  )
}

export default page