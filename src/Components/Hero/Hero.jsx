import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import heroImage from "../../assets/hero.png";

const Hero = () => {
  return (
    <section className="w-full bg-[#D2D2D2] p-4 md:p-20 pb-0 md:pb-0">
      <div className="mx-auto max-w-3xl text-center ">
        <h1 className="text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
          We Build
          <br />
          <span className="text-violet-600">Productive</span> Apps
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://play.google.com/store/games?device=windows"
            className="inline-flex items-center gap-3 rounded-md border border-[#D2D2D2] px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:shadow"
          >
            <FaGooglePlay className="text-lg" />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            className="inline-flex items-center gap-3 rounded-md border border-[#D2D2D2] px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm transition hover:shadow"
          >
            <FaApple className="text-lg" />
            App Store
          </a>
        </div>

        <img src={heroImage} alt="Hero" className="w-full h-auto pt-10" />
      </div>
    </section>
  );
};

export default Hero;
