import Header from "@/components/Header";
import Hero from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <>
      <div>
      <Header />
      <Hero />
      s
      </div>
    </>
  );
}
