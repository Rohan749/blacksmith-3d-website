"use client"

import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/layout/Header";
import AboutUs from "./components/AboutUs";
import CpuFeature1 from "./components/CpuFeature1";
import CpuFeature2 from "./components/CpuFeature2";
import CpuFeature3 from "./components/CpuFeature3";
import Teams from "./components/Teams";
import CompanyCarousel from "./components/CompanyCarousel";
import Footer from "./components/layout/Footer";
import ContactUs from "./components/ContactUs";
import CPUModel from "./components/CPUModel";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import SmoothScroll from "./components/SmoothScroll";
// import ScrollSmoother from "gsap/dist/ScrollSmoother";

export default function Home() {

  return (
    <>
    <SmoothScroll>
      <div className="relative z-40">
        <CPUModel />
      </div>
      <div className="relative z-20">
        <Header />
      </div>
      <div className="relative z-30">
        <Hero />
      </div>
      <div className="relative z-30">
        <AboutUs />
      </div>
      <div className="relative z-50">
        <CpuFeature1 />
      </div>
      <div className="relative z-50">
        <Teams />
      </div>
      <div className="relative z-50">
        <ContactUs />
      </div>
      <div className="relative z-50">
        <Footer />
      </div>
      </SmoothScroll>
    </>
  );
}
