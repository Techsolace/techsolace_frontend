import Link from "next/link";
import { FlipWords } from "../ui/flip-words";

export function FlipText() {
  const words = ["Apps", "Videos", "Graphics", "Content"];

  return (
    <div className="flex justify-center items-center">
      <div className="text-3xl lg:text-4xl mx-auto font-normal text-white font-Primary lg:leading-[60px] pb-10 lg:pb-none">
        We Create
        <FlipWords words={words} /> <br />
        Your Dream Our Responsibility
      </div>
    </div>
  );
}
