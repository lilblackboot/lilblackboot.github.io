'use client';
import React, { useState } from "react";
import Link from "next/link";
import { Montserrat } from 'next/font/google'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
})

function Main() {
  const [showContent, setShowContent] = useState(false);

  // Initial LBB SVG animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          const svgEl = document.querySelector(".svg");
          if (svgEl) svgEl.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  }, []);

  // Content animation after SVG transition
  useGSAP(() => {
    if (!showContent) return;

    const main = document.querySelector(".main");
    const handleMouseMove = (event: Event) => {
      const e = event as MouseEvent;
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      gsap.to(".main .text", { x: `${xMove * 0.5}%` });
      gsap.to(".sky", { x: xMove });
      gsap.to(".bg", { x: xMove * 1.7 });
    };

    main?.addEventListener("mousemove", handleMouseMove);

    return () => {
      main?.removeEventListener("mousemove", handleMouseMove);
    };
  }, [showContent]);


  // Responsive Hamburger Dropdown Menu
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'Skills', href: '/skills' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Hamburger Dropdown Menu */}
      <div className="fixed top-2 right-5 sm:top-4 sm:right-4 z-50">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 p-2 md:p-3 rounded-full bg-black/80 hover:bg-gray-800 transition-colors group"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5">
            <span className={`block w-6 h-0.5 bg-yellow-400 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-yellow-400 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-yellow-400 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
        {/* Dropdown Menu */}
        <div className={`absolute right-0 mt-3 w-44 sm:w-56 py-2 bg-black/90 backdrop-blur-sm border border-yellow-400/20 rounded-xl shadow-xl transition-all duration-300 ${
          menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        } ${montserrat.className}`}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-2 text-gray-200 hover:text-yellow-400 hover:bg-gray-800/50 transition-colors text-base sm:text-lg"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Overlay to close menu when clicking outside */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>

      {/* Main content after animation */}
      <div className="main w-full" id="home">
        <div className="landing overflow-hidden relative w-full h-screen bg-black">
          {/* Navbar */}
          <div className="navbar absolute top-0 left-0 z-[10] w-full py-6 px-4 sm:py-10 sm:px-10">
            <div className="logo flex gap-4 sm:gap-7 items-center">
              <h3 className="text-2xl sm:text-4xl mt-2 ml-3 sm:-mt-[8px] leading-none text-white">
                Developer
              </h3>
              <div className="lines  sm:visible hidden sm:flex flex-col gap-[5px]">
                <div className="line w-10 sm:w-15 h-2 bg-white"></div>
                <div className="line w-6 sm:w-8 h-2 bg-white"></div>
                <div className="line w-4 sm:w-5 h-2 bg-white"></div>
              </div>
            </div>
          </div>

          {/* Background Images & Text */}
          <div className="imagesdiv relative overflow-hidden w-full h-screen">
            <Image
              className="absolute sky scale-[1.1] sm:scale-[1.25] top-0 left-0 w-full h-full object-cover"
              src="/bgimg.png"
              alt=""
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
            <div className="text text-white  flex flex-col gap-2 sm:gap-3 absolute top-70 sm:top-20 left-1/2 -translate-x-1/2 items-center">
              <h1 className="text-[3rem] xs:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none -ml-30 sm:-ml-40">Suzan</h1>
              <h1 className="text-[3rem] xs:text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] leading-none ml-10 sm:ml-30">Mansuri</h1>
              <h1 className="text-[4rem] xs:text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] -ml-5 leading-none sm:-ml-40">lilblackboot</h1>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-6 px-4 sm:py-15 sm:px-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-2 sm:gap-4 items-center">
              <i className="text-2xl sm:text-4xl ri-arrow-down-line"></i>
              <h3 className="text-base sm:text-xl font-[Helvetica_Now_Display]">
                Scroll Down
              </h3>
            </div>
          </div>
        </div>
        {/* Example About Section */}
      </div>
    </>
  );
}

export default Main;
