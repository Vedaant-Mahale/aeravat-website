"use client"

import type React from "react"

import "./App.css"
import { useState, useRef, useEffect } from "react"
import pinktraingle from "./assets/pink-triangle.png"
import pinksquare from "./assets/pink-square.png"
import pinkcircle from "./assets/pink-circle.png"
import squidGameBg from "./assets/squid-game-14.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [clicked, setClicked] = useState(false)
  const aboutRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Refs for GSAP animations
  const aboutTitleRef = useRef<HTMLDivElement>(null)
  const aboutCard1Ref = useRef<HTMLDivElement>(null)
  const aboutCard2Ref = useRef<HTMLDivElement>(null)
  const aboutCard3Ref = useRef<HTMLDivElement>(null)
  const bgImageRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Initialize GSAP animations
  useEffect(() => {
    // Create a context to store animations for cleanup
    const ctx = gsap.context(() => {
      // About section animations
      if (aboutRef.current) {
        // Background image animation
        gsap.from(bgImageRef.current, {
          opacity: 0,
          scale: 1.2,
          duration: 1.5,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })

        // Title animation
        gsap.from(aboutTitleRef.current, {
          y: -50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        })

        // Cards animations - each coming from a different direction
        gsap.from(aboutCard1Ref.current, {
          x: -700,
          opacity: 0,
          duration: 0,
          delay: 0.3,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(aboutCard2Ref.current, {
          y: 700,
          opacity: 0,
          duration: 0,
          delay: 0.5,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        })

        gsap.from(aboutCard3Ref.current, {
          x: 700,
          opacity: 0,
          duration: 0,
          delay: 0.7,
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 100%",
            toggleActions: "play none none reverse",
          },
        })
      }

      // Timeline section animations - use a more efficient approach with selectors
      if (timelineRef.current) {
        // Animate timeline boxes on the left
        gsap.from(".timeline-left-box", {
          x: -100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            scrub: 1,
          },
        })

        // Animate timeline boxes on the right
        gsap.from(".timeline-right-box", {
          x: 100,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            scrub: 1,
          },
        })

        // Animate timeline center items
        gsap.from(".timeline-center-item", {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none none",
            scrub: 1,
          },
        })
      }
    })

    // Cleanup function to kill animations when component unmounts
    return () => {
      ctx.revert() // This will clean up all animations created in the context
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, []) // Empty dependency array ensures this runs once on mount

  return (
    <>
      <div className="relative w-full h-screen bg-black flex justify-center items-center flex-col">
        <div className="text-7xl text-fuchsia-400 absolute top-5 squid-font">AERAVAT</div>
        <div
          className="absolute md:w-40 md:h-40 w-20 h-20 rounded-full border-fuchsia-400 md:border-4 border-2 text-fuchsia-400 top-1/2 translate-y-[90px] md:translate-y-[180px] bottom-50 flex justify-center items-center shadow-[0px_0px_20px_rgb(255,100,200)] transition-all duration-300 ease-in-out cursor-pointer hover:bg-fuchsia-400/20 squid-font"
          style={{
            opacity: clicked ? 1 : 0,
            transform: clicked ? "translate(0px, 0px)" : "translate(0px,-200px)",
          }}
          onClick={() => scrollToSection(aboutRef)}
        >
          ABOUT
        </div>
        <div
          className="absolute md:w-40 md:h-40 w-20 h-20 rounded-full border-fuchsia-400 md:border-4 border-2 text-fuchsia-400 top-1/2 translate-y-[-100px] translate-x-[-115px] md:translate-y-[-200px] md:translate-x-[-230px] bottom-50 flex justify-center items-center shadow-[0px_0px_20px_rgb(255,100,200)] transition-all duration-300 ease-in-out cursor-pointer hover:bg-fuchsia-400/20 squid-font"
          style={{
            opacity: clicked ? 1 : 0,
            transform: clicked ? "translate(0px, 0px)" : "translate(200px, 80px)",
          }}
          onClick={() => scrollToSection(timelineRef)}
        >
          TIMELINE
        </div>
        <div
          className="absolute md:w-40 md:h-40 w-20 h-20 rounded-full border-fuchsia-400 md:border-4 border-2 text-fuchsia-400 top-1/2 translate-y-[-100px] translate-x-[115px] md:translate-y-[-200px] md:translate-x-[230px] bottom-50 flex justify-center items-center shadow-[0px_0px_20px_rgb(255,100,200)] transition-all duration-300 ease-in-out cursor-pointer hover:bg-fuchsia-400/20 squid-font"
          style={{
            opacity: clicked ? 1 : 0,
            transform: clicked ? "translate(0px, 0px)" : "translate(-200px,80px)",
          }}
        >
          CONTACT
        </div>
        <div
          className="relative md:w-80 md:h-80 w-40 h-40 rounded-full md:border-4 border-2 border-fuchsia-400 flex flex-col shadow-[0px_0px_20px_rgb(255,100,200)] rotate cursor-pointer transition-colors duration-300 ease-in-out"
          style={{ backgroundColor: clicked ? "rgb(250,50,250)" : "black" }}
          onClick={() => {
            setClicked(!clicked)
          }}
        >
          <div className="md:w-20 md:h-20 w-10 h-10 bg-black absolute md:top-15 md:left-6 top-7 left-3 rounded-full border-2 border-fuchsia-400 flex justify-center items-center">
            <img className="md:w-14 md:h-12 mb-2 w-7 h-6" src={pinktraingle || "/placeholder.svg"}></img>
          </div>
          <div className="md:w-20 md:h-20 w-10 h-10 bg-black absolute md:top-15 md:right-6 top-7 right-3 rounded-full border-2 border-fuchsia-400 flex justify-center items-center">
            <img className="md:w-14 md:h-14 w-7 h-7" src={pinksquare || "/placeholder.svg"}></img>
          </div>
          <div className="md:w-20 md:h-20 w-10 h-10 bg-black absolute md:bottom-2 left-1/2 -translate-x-1/2 bottom-1 rounded-full border-2 border-fuchsia-400 flex justify-center items-center">
            <img className="md:w-14 md:h-14 w-7 h-7" src={pinkcircle || "/placeholder.svg"}></img>
          </div>
          <div className="md:w-30 md:h-30 w-15 h-15 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fuchsia-400 justify-center items-center"></div>
        </div>
      </div>

      <div
        ref={aboutRef}
        className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden py-16"
      >
        <div
          ref={bgImageRef}
          className="absolute top-0 left-0 w-full h-full z-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${squidGameBg})` }}
        ></div>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>

        <div ref={aboutTitleRef} className="absolute top-8 left-0 w-full flex justify-center z-10">
          <div className="squid-title text-5xl md:text-7xl text-white font-bold tracking-widest">ABOUT</div>
        </div>

        {/* 3-column grid layout */}
        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-10 z-10 mt-16 md:mt-0">
          <div ref={aboutCard1Ref} className="transform transition-all duration-500 hover:scale-105">
            <div className="relative bg-transparent bg-opacity-40 backdrop-blur-[2px] rounded-lg overflow-hidden border-2 border-[#ff3d6f] h-[400px] flex flex-col">
              <div className="pt-10 pb-8 px-6 flex flex-col flex-grow">
                <h2 className="text-white text-3xl font-bold mb-4 mt-2 squid-font">ABOUT AERAVAT</h2>
                <div className="bg-[#ff3d6f] h-0.5 w-full mb-6"></div>
                <p className="text-white text-lg flex-grow octosquares-font">
                  Aeravat is a cutting-edge technology collective that operates like the ultimate game. We follow strict
                  rules of excellence and innovation, eliminating obstacles that stand in our way.
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <div className="squid-button px-6 py-2 bg-squid-pink text-white font-bold rounded cursor-pointer hover:bg-white hover:text-squid-pink transition-colors squid-font">
                    LEARN MORE
                  </div>
                  <div className="w-12 h-12 bg-squid-pink rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={aboutCard2Ref} className="transform transition-all duration-500 hover:scale-105">
            <div className="relative bg-transparent bg-opacity-40 backdrop-blur-[2px] rounded-lg overflow-hidden border-2 border-[#1f9e62] h-[400px] flex flex-col">
              <div className="pt-10 pb-8 px-6 flex flex-col flex-grow">
                <h2 className="text-white text-3xl font-bold mb-4 mt-2 squid-font">DOMAINS</h2>
                <div className="bg-[#1f9e62] h-0.5 w-full mb-6"></div>

                <div className="grid grid-cols-1 gap-4 text-white octosquares-font">
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#1f9e62] rounded-full mr-2"></div>
                    <span>AI in FinTech</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#1f9e62] rounded-full mr-2"></div>
                    <span>AI in HealthTech</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#1f9e62] rounded-full mr-2"></div>
                    <span>GenAI</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-[#1f9e62] rounded-full mr-2"></div>
                    <span>AI for Social Cause</span>
                  </div>
                </div>

                <div className="mt-auto flex justify-between items-center">
                  <div className="squid-button px-6 py-2 bg-squid-green text-white font-bold rounded cursor-pointer hover:bg-white hover:text-squid-green transition-colors squid-font">
                    REGISTER
                  </div>
                  <div className="w-12 h-12 bg-[#1f9e62] flex items-center justify-center">
                    <div className="w-8 h-8 bg-white square"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract Card */}
          <div ref={aboutCard3Ref} className="transform transition-all duration-500 hover:scale-105">
            <div className="relative bg-transparent bg-opacity-40 backdrop-blur-[2px] rounded-lg overflow-hidden border-2 border-[#e51937] h-[400px] flex flex-col">
              <div className="pt-10 pb-8 px-6 flex flex-col flex-grow">
                <h2 className="text-white text-3xl font-bold mb-4 mt-2 squid-font">ABSTRACT</h2>
                <div className="bg-[#e51937] h-0.5 w-full mb-6"></div>
                <p className="text-white text-lg flex-grow octosquares-font">
                  Aeravat challenges
                  participants to push boundaries, break conventional thinking, and create solutions that transform
                  industries.
                </p>

                <div className="mt-auto flex justify-between items-center">
                  <div className="squid-button px-6 py-2 bg-squid-red text-white font-bold rounded cursor-pointer hover:bg-white hover:text-squid-red transition-colors squid-font">
                    JOIN THE GAME
                  </div>
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="absolute w-12 h-12 bg-[#e51937] clip-path-triangle"></div>
                    <div className="absolute w-8 h-8 bg-white clip-path-triangle transform translate-y-[2px]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={timelineRef} className="relative w-full h-[200vh] bg-black justify-center flex">
        <div className="md:w-3/7 w-1/2">
          <div className="timeline-left-box md:mt-22 mt-17 h-40 md:mr-10 mr-4 md:w-96 w-40 float-right border-2 border-fuchsia-500 glow rounded-xl"></div>
          <div className="timeline-left-box md:mt-104 mt-88 h-40 md:mr-10 mr-4 md:w-96 w-40 float-right border-2 border-fuchsia-500 glow rounded-xl"></div>
        </div>
        <div className="relative h-full bg-black justify-center flex flex-col">
          <img
            className="timeline-center-item m-auto md:w-14 md:h-14 w-7 h-7 rotate"
            src={pinksquare || "/placeholder.svg"}
          ></img>
          <div className="timeline-center-item m-auto w-1 bg-fuchsia-500 mt-5 mb-5 h-50 rounded-full glow"></div>
          <img
            className="timeline-center-item m-auto md:w-14 md:h-14 w-7 h-7 rotate"
            src={pinktraingle || "/placeholder.svg"}
          ></img>
          <div className="timeline-center-item m-auto w-1 bg-fuchsia-500 mt-5 mb-5 h-50 rounded-full glow"></div>
          <img
            className="timeline-center-item m-auto md:w-14 md:h-14 w-7 h-7 rotate"
            src={pinksquare || "/placeholder.svg"}
          ></img>
          <div className="timeline-center-item m-auto w-1 bg-fuchsia-500 mt-5 mb-5 h-50 rounded-full glow"></div>
          <img
            className="timeline-center-item m-auto md:w-14 md:h-14 w-7 h-7 rotate"
            src={pinktraingle || "/placeholder.svg"}
          ></img>
          <div className="timeline-center-item m-auto w-1 bg-fuchsia-500 mt-5 mb-5 h-50 rounded-full glow"></div>
          <img
            className="timeline-center-item m-auto mb-10 md:w-14 md:h-14 w-7 h-7 rotate"
            src={pinksquare || "/placeholder.svg"}
          ></img>
        </div>
        <div className="md:w-3/7 w-1/2">
          <div className="timeline-right-box mt-80 md:mt-94 h-40 md:w-96 md:ml-10 ml-4 w-40 float-left border-2 border-fuchsia-500 glow rounded-xl"></div>
          <div className="timeline-right-box md:mt-104 mt-88 h-40 md:ml-10 ml-4 md:w-96 w-40 float-left border-2 border-fuchsia-500 glow rounded-xl"></div>
        </div>
      </div>
    </>
  )
}

export default App
