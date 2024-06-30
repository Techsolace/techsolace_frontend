"use client";
import React, { useEffect, useRef } from "react";
import lines from "@/../public/lines-1.png";

const background = {
  backgroundSize: "cover",
  backgroundColor: "black",
  backgroundImage: `url(${lines.src})` // Ensure to use .src to get the path of the image,
};

const Video = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (err) {
          console.log("Autoplay was prevented:", err);
        }
      }
    };

    playVideo();
  }, []);

  return (
    <div style={background}>
      <div className="max-w-[1200px] p-10 m-auto">
      <h1 className="text-xl lg:text-6xl text-white tracking-wider pt-10 pb-10 font-Primary leading-[25px] lg:leading-[60px] text-center">
        Unleashing Creativity, Shaping Your Brand! At our design agency, we
        specialize in creating unique and memorable visual experiences for bold
        brands ready to make a statement.
      </h1>
      <video
        ref={videoRef}
        width="1000px"
        height="600px"
        preload="none"
        loop
        muted
        className="m-auto p-10"
      >
        <source src="/brandVideo.mp4" type="video/mp4" />
      </video>
      </div>
    </div>
  );
};

export default Video;
