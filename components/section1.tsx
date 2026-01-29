import Image from "next/image";
import React from "react";
import { Sphere } from "@/components/ui/sphere";

const Section1 = () => {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen gap-[15 vh]">
      <div className="text-center w-6xl mx-auto my-6 flex flex-col gap-4 ">
        <p className="font-bold">Trusted by over 2+ million worldwide</p>
        {/* marquee */}
        <div className="flex w-full overflow-hidden select-none mask-[linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-2 ">
          <div className="flex shrink-0 animate-marquee gap-25 pr-25 grayscale items-center">
            <img
              src="/logo.svg"
              alt="logo1"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo2"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo3"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo4"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo5"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo6"
              className="size-25 object-contain"
            />
          </div>
          <div
            aria-hidden="true"
            className="flex shrink-0 animate-marquee gap-25 pr-25 grayscale items-center"
          >
            <img
              src="/logo.svg"
              alt="logo1"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo2"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo3"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo4"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo5"
              className="size-25 object-contain"
            />
            <img
              src="/logo.svg"
              alt="logo6"
              className="size-25 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-full text-center flex flex-col items-center justify-center px-4 gap-12 pb-20">
        <svg
          height="168px"
          width="168px"
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512.00 512.00"
          xmlSpace="preserve"
          fill="#707070"
          stroke="#707070"
          strokeWidth="0.00512"
          transform="rotate(180)matrix(1, 0, 0, 1, 0, 0)"
          className="opacity-25"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#CCCCCC"
            strokeWidth="2.048"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {/* Wrap CSS in curly braces and backticks */}
            <style type="text/css">{`.st0{fill:#707070;}`}</style>
            <g>
              <path
                className="st0"
                d="M119.472,66.59C53.489,66.59,0,120.094,0,186.1c0,65.983,53.489,119.487,119.472,119.487 c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.135,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.829-6.389 c82.925-90.7,115.385-197.448,115.385-251.8C238.989,120.094,185.501,66.59,119.472,66.59z"
              ></path>
              <path
                className="st0"
                d="M392.482,66.59c-65.983,0-119.472,53.505-119.472,119.51c0,65.983,53.489,119.487,119.472,119.487 c0,0-0.578,44.392-36.642,108.284c-4.006,12.802,3.136,26.435,15.945,30.418c9.089,2.859,18.653,0.08,24.828-6.389 C479.539,347.2,512,240.452,512,186.1C512,120.094,458.511,66.59,392.482,66.59z"
              ></path>
            </g>
          </g>
        </svg>
        <h1 className="text-5xl font-semibold max-w-6xl  mx-auto  leading-snug">
          Our team users <span className="text-orange-500">Screennote</span>{" "}
          across almost all meetings. It's reliable, and has significantly
          improved how we capture and revisit conversations.
        </h1>
        <p className="max-w-3xl mx-auto font-semibold text-lg -mt-2">
          Declan foster |{" "}
          <span className="font-normal">Head of Marketing</span>{" "}
        </p>
      </div>
      <div className="relative w-full py-20 mx-auto flex flex-col items-center justify-around gap-20">
        <div className="w-120 py-10 px-15   flex flex-col  rounded-tl-[80px] rounded-tr-[80px]  rounded-br-[80px] shadow-2xl itecems-center text-start justify-center absolute top-28 left-[57%] z-100 backdrop-blur-sm bg-neutral-100/60">
          <h3 className="text-xl font-semibold">
            Time Lost to Manual Documentation
          </h3>
          <p className="text-sm text-neutral-400">
            Spending 30+ minutes writing docs for every 10 minutes recording
          </p>
        </div>
        <Sphere size={400} />
        <h1 className="text-5xl font-semibold w-md text-center ">There's an AI Notetake for that</h1>
        <div className="w-110 py-10 px-15 backdrop-blur-sm bg-neutral-100/60 flex flex-col  rounded-tl-[80px] rounded-tr-[80px]  rounded-bl-[80px] shadow-2xl itecems-center text-start justify-center absolute bottom-105 right-[57%] z-100">
          <h3 className="text-xl font-semibold">Context Always Missing</h3>
          <p className="text-sm text-neutral-400">
            Important details get lost without proper context during meetings
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
