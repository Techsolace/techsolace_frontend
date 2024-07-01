import type { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cursor from "./components/cursor";
import Marquee from "./components/marquee";
import Marqueee from "./components/marqueee";
import Video from "./components/Video";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";

export const metadata: Metadata = {
  title: "Techsolace - Your Dream Our Responsibility",
  description:
    "Discover Techsolace, where your dreams meet our commitment. We provide innovative tech solutions tailored to your needs, ensuring excellence and reliability every step of the way. Experience the future with Techsolace - Your Dream, Our Responsibility.",
};

export default function Home() {
  return <>
  <Cursor />
  <Header />
  <Hero />
  <Marquee />
  <Marqueee />
  <Video />
  <Portfolio />
  <Services />
  </>;
}
