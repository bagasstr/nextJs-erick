"use client";
import Image from "next/image";
import React from "react";
import { BsFillHousesFill } from "react-icons/bs";
import { RiMouseLine } from "react-icons/ri";
import { Link } from "react-scroll";
// import heroImg from "/assets/heroImg.jpg";
// import hero from "/assets/hero.jpg";

const Hero = () => {
  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div className="imgHero overflow-y-hidden">
          <Image
            src={"/assets/heroImg.jpg"}
            width={1000}
            height={1000}
            alt="heroImage"
            className="brightness-[.3] w-screen h-screen mobile:hidden"
          />
          <Image
            src={"/assets/hero.jpg"}
            width={1000}
            height={1000}
            alt="heroImage"
            className="brightness-[.4] desktop:hidden"
          />
        </div>
        <div className="absolute top-[10rem] desktop:top-[15rem] text-white">
          <div className="heroLogo gap-x-2 flex flex-col justify-center items-center">
            <BsFillHousesFill className="text-white desktop:text-4xl text-3xl mb-2" />
            <h1 className="text-white desktop:text-5xl font-semibold text-2xl mb-3">
              ERICKFUTURA
            </h1>
            <h2 className="text-center desktop:text-base desktop:rounded-md text-sm font-light desktop:w-[30rem] w-[17rem]">
              Agent Futura Property, Jual, Beli Dan Sewa Property, Mulai dari
              property primary hingga property secondary.
            </h2>
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <div className="flex flex-col justify-center items-center gap-y-3 cursor-pointer text-white/80">
                <RiMouseLine className="text-2xl mt-[6rem]" />
                <h1 className="text-sm">Scroll Down</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
