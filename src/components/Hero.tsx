import React from "react";
import MainHero from "@/../public/heroSection.png";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightAltOutlined } from "@mui/icons-material";

const Hero = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div className="w-full">
          <div className="m-auto max-w-[1200px]">
            <div className="p-8 w-full h-[900px] flex flex-col lg:flex-row justify-between items-center">
              <div className="flex-[1]">
                <h1 className="text-5xl font-bold leading-[60px] text-Inter text-blue-950">
                  Growing your business with confidence
                </h1>
                <p className="mt-10 text-2xl">
                  We Innovate User Interfaces Using Insights from Behavioral
                  Science.
                </p>
                <div className="relative block mt-8">
                  <input
                    type="text"
                    placeholder="Get a Call Back?"
                    className="transition w-full px-8 outline-none shadow-none focus:shadow-xl py-2 rounded-full font-Inter border-[1px]"
                  />
                  <button
                    type="submit"
                    name="sendNumber"
                    className="transition absolute top-1 right-1.5 z-[10] bg-yellow-300 rounded-full p-1 hover:bg-black hover:text-white"
                  >
                    <ArrowRightAltOutlined />
                  </button>
                </div>
              </div>
              <div className="flex-[1.2] block">
                <div className="flex justify-end">
                  <Image
                    src={MainHero}
                    alt="Hero"
                    width={1000}
                    height={1000}
                    className="bottom-0 right-0 w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
