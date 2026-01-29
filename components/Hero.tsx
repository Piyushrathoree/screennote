import { Button } from "@base-ui/react";
import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Download,
  Mic,
  MicOff,
  Pen,
} from "@hugeicons/core-free-icons";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      <div className="mx-auto w-5xl tracking-tighter flex flex-col gap-7 items-center mt-32">
        <h1 className="text-7xl font-semibold text-black text-center">
          Convert screen recordings into clear, intelligent insights
        </h1>
        <p className="text-black text-center text-lg">
          From screen Recording to serachable knowledge, powered by Screennote
          AI. Skip the manual work.
        </p>
        <div className="flex gap-3 text-white">
          <Button className="px-6 py-3 rounded-full bg-orange-600 shadow-sm shadow-white/40 border-none hover:shadow-2xs transition-all duration-300 ease-out flex gap-2 items-center ">
            Download{" "}
            <HugeiconsIcon
              icon={Download}
              strokeWidth={2}
              className="text-white size-5"
            />
          </Button>
          <Button className="px-5 py-3 rounded-full bg-linear-to-b from-neutral-500  via-neutral-700 to-neutral-800 shadow-sm shadow-white/40 border-none hover:shadow-2xs transition-all duration-300 ease-out ">
            Watch Demo{" "}
          </Button>
        </div>
      </div>
      <div
        className="w-[98%] h-[90vh] my-10 mx-auto rounded-3xl shadow-2xl shadow-orange-500/70 relative overflow-hidden flex items-center justify-center"
        style={{
          background: `
            radial-gradient(circle at 50% -40%, rgba(255,255,255,0.2) 0%, transparent 40%),
            repeating-radial-gradient(circle at 0% 0%, transparent 0, transparent 40px, rgba(255,255,255,0.08) 40px, rgba(255,255,255,0.08) 41px),
            linear-gradient(120deg, #c2410c 0%, #ea580c 50%, #fb923c 100%)
          `,
          boxShadow: "inset 0 0 100px rgba(0,0,0,0.3)",
        }}
      >
        <div className="w-[65%] h-[85%] rounded-[32px] bg-white/20 backdrop-blur-sm p-4 flex items-center justify-center border border-white/10">
          <div className="w-full h-full rounded-[24px] bg-neutral-50/95 grid grid-cols-12 overflow-hidden shadow-2xl">
            <div className="col-span-3 border-r border-gray-100 p-4 flex flex-col gap-4 overflow-y-auto justify-evenly">
              <div className="bg-white rounded-3xl p-4 flex flex-col items-center justify-center gap-3 shadow-sm border border-orange-100/50 relative h-45  ">
                <div className="">
                  <div className="w-20 h-20 rounded-full p-1 ring-2 ring-orange-500 ring-offset-2 overflow-hidden">
                    <Image
                      src="/user4.png"
                      alt="neel"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute top-2 left-2 text-orange-500">
                    <HugeiconsIcon icon={Mic} size={20} strokeWidth={2.5} />
                  </div>
                </div>
                <span className="font-semibold text-gray-700 text-sm">
                  neel
                </span>
              </div>

              <div className="bg-white rounded-3xl p-4 flex flex-col items-center gap-3 shadow-none opacity-80 hover:opacity-100 transition-opacity justify-center h-45 relative">
                <div className="">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/user.png"
                      alt="nicolas"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 text-gray-400">
                    <HugeiconsIcon icon={MicOff} size={18} strokeWidth={2} />
                  </div>
                </div>
                <span className="font-medium text-gray-500 text-sm">
                  nicolas
                </span>
              </div>

              <div className="bg-white rounded-3xl p-4 flex flex-col items-center gap-3 shadow-none opacity-80 hover:opacity-100 transition-opacity justify-center h-45 relative">
                <div className="">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/user2.png"
                      alt="rabecca"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 text-gray-400">
                    <HugeiconsIcon icon={MicOff} size={18} strokeWidth={2} />
                  </div>
                </div>
                <span className="font-medium text-gray-500 text-sm">Sarah</span>
              </div>

              <div className="bg-white rounded-3xl p-4 flex flex-col items-center gap-3 shadow-none opacity-80 hover:opacity-100 transition-opacity justify-center h-45 relative">
                <div className="">
                  <div className="w-16 h-16 rounded-full overflow-hidden">
                    <Image
                      src="/user3.png"
                      alt="Sarah"
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute top-2 left-2 text-gray-400">
                    <HugeiconsIcon icon={MicOff} size={18} strokeWidth={2} />
                  </div>
                </div>
                <span className="font-medium text-gray-500 text-sm">Sarah</span>
              </div>
            </div>

            <div className="col-span-9 flex flex-col bg-white">
              <div className="px-8 pt-8 pb-4">
                <div className="text-gray-400 text-sm font-medium mb-1 flex items-center gap-2">
                  <span>#Project 2026</span>{" "}
                  <span className="text-gray-300">/</span>{" "}
                  <span className="text-gray-800">Kickoff Meeting</span>
                </div>
                <div className="flex items-end justify-between">
                  <h1 className="text-5xl font-bold tracking-tight text-gray-900">
                    Kickoff Meeting
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="w-6 h-6 rounded-full ring-2 ring-white overflow-hidden bg-gray-200"
                        >
                          <Image
                            src={`/user${i === 1 ? "" : i}.png`}
                            width={24}
                            height={24}
                            alt="user"
                          />
                        </div>
                      ))}
                    </div>
                    <span className="font-medium text-gray-700">Nicolas</span>
                    <span>Today at 10:30 am</span>
                    <span>25 mins</span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="flex gap-8 mt-8 border-b border-gray-100">
                  <button className="pb-3 text-gray-400 font-medium hover:text-gray-600 transition-colors">
                    Summary
                  </button>
                  <button className="pb-3 text-orange-600 font-semibold border-b-2 border-orange-500">
                    Transcript
                  </button>
                </div>
              </div>

              {/* Transcript Area */}
              <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
                {/* Message 1 - Nicolas (Active/Highlighted) */}
                <div className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100/50">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-1">
                    <Image
                      src="/user2.png"
                      width={40}
                      height={40}
                      alt="Nicolas"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">
                        Nicolas
                      </span>
                      <span className="text-gray-400 text-xs">10:34</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm">
                      Before we go too far, can we align on what success looks
                      like for this? Just want to make sure we're setting the
                      right direction from the start.
                    </p>
                  </div>
                </div>

                {/* Message 2 - Rebecca */}
                <div className="flex gap-4 px-4 py-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-1 opacity-80">
                    <Image
                      src="/user.png"
                      width={40}
                      height={40}
                      alt="Rebecca"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">
                        Rebecca
                      </span>
                      <span className="text-gray-400 text-xs">10:36</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Yeah, that makes sense. Having clear outcomes will help a
                      lot.
                    </p>
                  </div>
                </div>

                {/* Message 3 - Henry (using user3 as placeholder) */}
                <div className="flex gap-4 px-4 py-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-1 opacity-80">
                    <Image
                      src="/user3.png"
                      width={40}
                      height={40}
                      alt="Henry"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">
                        Henry
                      </span>
                      <span className="text-gray-400 text-xs">10:37</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Agreed. It'll make prioritization easier as things move
                      forward.
                    </p>
                  </div>
                </div>

                {/* Message 4 - Nicolas */}
                <div className="flex gap-4 px-4 py-2">
                  <div className="w-10 h-10 rounded-full overflow-hidden shrink-0 mt-1 opacity-80">
                    <Image
                      src="/user2.png"
                      width={40}
                      height={40}
                      alt="Nicolas"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-bold text-gray-900 text-sm">
                        Nicolas
                      </span>
                      <span className="text-gray-400 text-xs">10:40</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      Exactly. Once we're aligned on success, the rest should
                      fall into place more smoothly.
                    </p>
                  </div>
                </div>
              </div>

              {/* Player Control Bar */}
              <div className="mt-auto px-8 py-5 border-t border-gray-100 bg-white/50 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  {/* Controls */}
                  <div className="flex items-center gap-3 mr-2">
                    <button className="h-8 w-8 flex items-center justify-center rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors">
                      <div className="w-3 h-3 bg-white rounded-[2px]" />
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center text-gray-700 hover:text-black">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <rect x="7" y="5" width="3" height="14" rx="1.5" />
                        <rect x="14" y="5" width="3" height="14" rx="1.5" />
                      </svg>
                    </button>
                    <button className="h-8 w-8 flex items-center justify-center text-gray-700 hover:text-black">
                      <svg
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Progress Bar */}
                  <div className="flex-1 flex gap-3 items-center">
                    <div className="flex-1 h-1 bg-gray-200 rounded-full relative group cursor-pointer">
                      <div className="absolute top-0 left-0 h-full w-[30%] bg-red-500 rounded-full">
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 font-medium tabular-nums">
                      10:23
                    </span>
                  </div>

                  {/* Tools */}
                  <div className="flex items-center gap-4 text-gray-400 ml-4">
                    <HugeiconsIcon icon={Pen} size={18} />
                    <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center text-[10px] font-bold">
                      1x
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                    >
                      <path
                        d="M12 3v18M8 6v12M4 10v4M16 6v12M20 10v4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
