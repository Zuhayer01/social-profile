import React, { useEffect, useRef } from "react";
import Loader from "./Components/Loader";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Experience from "./Components/Experience";
import projects from './data.js';
import Cards from "./Components/Cards";
import LocomotiveScroll from 'locomotive-scroll';

import { useScroll } from "framer-motion";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });
  return (
    <>
      <Loader loaderText={"Stand By"} />
      <Navbar logoText={"Zuhayer"} />
      <Hero />
      <Experience />


      <main ref={container} className="mt-[20vh] mb-[5vh]">
        <h1 className="w-full text-center text-6xl" id="logo">Recent Projects</h1>
        {projects.map((project, index) => {
          const targetScale = 1 - ((projects.length - index) * 0.05);
          return <Cards key={index} i={index} {...project} range={[index * 0.25, 1]} progress={scrollYProgress} targetScale={targetScale} />
        })}
      </main>
    </>
  );
}

export default App;