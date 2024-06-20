import React from "react";
import lines from "@/../public/lines-1.png";
import Image from "next/image";
import { FlipText } from "./aceternity/FlipText";
import { Globe } from "./ui/globle";
import { GlobeDemo } from "./aceternity/Globe";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const background = {
    backgroundSize: "cover",
    backgroundColor: "black",
    backgroundImage: `url(${lines.src})` // Ensure to use .src to get the path of the image
  };

  return (
    <div style={background}>
      <div className="m-auto max-w-[1200px]">
        <div className="w-full h-auto lg:h-screen pt-[200px] lg:pt-0 flex flex-col lg:flex-row flex-wrap justify-center items-center">
          <div className="flex-[1] p-10 lg:p-none">
            <FlipText />
            <div className="lg:p-8 pb-20">
              <p className="text-white font-Secondary mb-10">
                Discover Techsolace, where your dreams meet our commitment. We
                provide innovative tech solutions tailored to your needs,
                ensuring excellence and reliability every step of the way.
                Experience the future with Techsolace - Your Dream, Our
                Responsibility.
              </p>
              <Link
                href="#"
                className="transition py-3 shadow-md border-[2px] border-[#00fff5] shadow-[#00fff5] hover:text-white hover:bg-transparent hover:border-[2px] hover:border-white hover:shadow-none text-black px-6 bg-[#00fff5] font-Primary font-semibold rounded-xl"
              >
                Schedule a Call
              </Link>
              <Link
                href="#"
                className="py-3 shadow-md px-6 bg-transparent text-white border-[2px] border-white ml-4 font-Primary font-semibold rounded-xl"
              >
                Work With Us
              </Link>
            </div>
          </div>
          <div className="flex-[1.2] hidden lg:block">
            <GlobeDemo />
          </div>
        </div>
      </div>
      <div id="dockerHero" className="hidden lg:flex">
        <InstagramIcon />
        <GitHubIcon />
        <FacebookIcon />
        <TwitterIcon />
        <CallIcon />
        <EmailIcon />
      </div>
    </div>
  );
};

export default Hero;
