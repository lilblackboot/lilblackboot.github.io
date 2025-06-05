import React from 'react'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

function page() {
  return (
    <>
      <section id='about' className="w-full mt-50 min-h-screen pb-10 flex items-center justify-center bg-black relative px-4 sm:px-8">
        <div className="cntnr flex flex-col md:flex-row justify-center text-white w-full max-w-6xl h-auto md:h-[80%] gap-8 md:gap-30">
          {/* Main Content */}
          <div className="rg w-full md:w-2/3 py-10 md:py-30">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4">building, beautifully</h1>
            <p className={`mt-6 sm:mt-10 text-base sm:text-lg ${montserrat.className}`}>
              Hi, I am Suzan Mansuri, a web developer and designer. I am about solving real world problems in the most asthetically pleasing way.
            </p>
            <p className={`mt-4 sm:mt-5 text-base sm:text-lg ${montserrat.className}`}>
              I have built, learned and designed so many things. Keep scrolling to take a look (or download my resume if you are a boring type)
            </p>
            <a href="/Resume.pdf" download>
              <button className="bg-yellow-500 px-6 sm:px-10 py-3 sm:py-5 text-black mt-6 sm:mt-10 text-xl sm:text-2xl md:text-4xl rounded-lg shadow-lg hover:bg-yellow-400 transition w-full sm:w-auto">
                Resume
              </button>
            </a>
          </div>
          {/* Timeline */}
          <div className="hidden md:flex flex-col items-center w-1/3">
            <div className="relative h-full flex flex-col items-start">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 via-gray-400 to-gray-700 rounded-full opacity-60"></div>
              {/* Timeline items */}
              <TimelineItem
                date="May 2025 - Present"
                title="Impact Training Program"
                subtitle="Parul University"
                description="Currently enrolled in the Impact Training Program, focusing on advanced web development and real-world problem solving."
                active
                fontClass={montserrat.className}
              />
              <TimelineItem
                date="Aug 2022"
                title="Started Bachelors"
                subtitle="Parul University"
                description="Began my undergraduate studies in Computer Science, learning core concepts and building foundational skills."
                fontClass={montserrat.className}
              />
              <TimelineItem
                date="Apr 2022"
                title="Completed 12th Grade"
                subtitle="Oxford English School"
                description="Graduated from high school with a focus on science and mathematics."
                fontClass={montserrat.className}
              />
            </div>
          </div>
          {/* Timeline for mobile */}
          <div className="flex md:hidden flex-col items-center w-full mt-10">
            <div className="relative w-full flex flex-col items-start">
              {/* Vertical line */}
              <div className="absolute left-2 top-0 h-full w-1 bg-gradient-to-b from-yellow-400 via-gray-400 to-gray-700 rounded-full opacity-60"></div>
              {/* Timeline items */}
              <TimelineItem
                date="May 2025 - Present"
                title="Impact Training Program"
                subtitle="Parul University"
                description="Currently enrolled in the Impact Training Program, focusing on advanced web development and real-world problem solving."
                active
                fontClass={montserrat.className}
              />
              <TimelineItem
                date="Aug 2022"
                title="Started Bachelors"
                subtitle="Parul University"
                description="Began my undergraduate studies in Computer Science, learning core concepts and building foundational skills."
                fontClass={montserrat.className}
              />
              <TimelineItem
                date="Apr 2022"
                title="Completed 12th Grade"
                subtitle="Oxford English School"
                description="Graduated from high school with a focus on science and mathematics."
                fontClass={montserrat.className}
              />
            </div>
          </div>
        </div>
        <div className="btmbar h-[30px] text-white absolute bottom-0 left-0 w-full py-4 px-4 sm:py-6 sm:px-10 bg-gradient-to-t from-black to-transparent"></div>
      </section>
    </>
  )
}

// Timeline item component
function TimelineItem({
  date,
  title,
  subtitle,
  description,
  active = false,
  fontClass = "",
}: {
  date: string,
  title: string,
  subtitle: string,
  description: string,
  active?: boolean,
  fontClass?: string,
}) {
  return (
    <div className={`flex items-center mb-8 last:mb-0 ${fontClass}`}>
      {/* Dot */}
      <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-4 ${active ? 'border-yellow-400 bg-yellow-400' : 'border-gray-400 bg-gray-800'} z-10 ml-1 sm:ml-2`}></div>
      {/* Text */}
      <div className="ml-4 sm:ml-6 text-left">
        <div className={`text-xs sm:text-sm ${active ? 'text-yellow-300 font-semibold' : 'text-gray-300'}`}>{date}</div>
        <div className={`text-base sm:text-lg ${active ? 'text-yellow-100 font-bold' : 'text-white font-semibold'}`}>{title}</div>
        <div className="text-xs text-gray-400">{subtitle}</div>
        <div className="text-xs text-gray-300 mt-1">{description}</div>
      </div>
    </div>
  )
}

export default page
