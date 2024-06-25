"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const nameRef = useRef(null);

  useLayoutEffect(() => {
    const name = nameRef.current;

    gsap.fromTo(
      name,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3
      }
    );
  }, []);

  return (
    <main>
      <div className="flex justify-between bg-teal-900 pt-5 pb-5 lg:text-3xl md:text-xl sm:text-lg">
        <div className="flex justify-center items-center gap-1 pl-4">
          <Image
            src="/avi-logo.png"
            width={40}
            height={40}
            className="lg:h-10 lg:w-10 md:h-6 md:w-6 sm:h-4 sm:w-4"
            alt="Logo"
          />
          <div className="text-black font-serif font-bold">Aviral Malik</div>
        </div>
        <div className="flex justify-center items-center font-bold gap-5 pr-4 text-black text-base font-serif lg:text-2xl md:text-xl sm:text-lg">
          <Link href="/home" className="hover:text-teal-600">Home</Link>
          <Link href="/about" className="hover:text-teal-600">About</Link>
          <Link href="/resume" className="hover:text-teal-600">Resume</Link>
          <Link href="/contact" className="hover:text-teal-600">Contact</Link>
        </div>
      </div>
      <div className="flex flex-col justify-center pt-10 text-teal-100 font-serif">
        <div className="flex">
          <div className="flex flex-col pl-10 gap-4">
            <div className="text-8xl">A Journey of a Software Developer:</div>
            <div className="text-2xl">
              A virtual portfolio website to showcase my skills and work
            </div>
          </div>
          <div className="relative">
            <Image
              src="/laptop with no screen.png"
              width={500}
              height={500}
              className="w-auto h-auto"
              alt="Laptop"
            />
            <div
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white font-bold text-4xl"
              ref={nameRef}
            >
              Aviral Malik
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
