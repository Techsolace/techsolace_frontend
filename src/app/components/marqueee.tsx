"use client"
import Image from "next/image";
import { useEffect, useRef } from "react";
import lines from "@/../public/lines-1.png";

const background = {
  backgroundSize: "cover",
  backgroundColor: "black",
  backgroundImage: `url(${lines.src})` // Ensure to use .src to get the path of the image
};

// Importing the icon using the `client` variable
const Icon = require('@/../public/icon.png').default;
const Icon2 = require('@/../public/icon2.jpeg').default;
const Icon3 = require('@/../public/icon3.png').default;
const Icon4 = require('@/../public/icon4.png').default;
const Icon5 = require('@/../public/icon5.png').default;
const Icon6 = require('@/../public/icon6.png').default;
const Icon7 = require('@/../public/icon7.png').default;

// Array of icon URLs
const icons = [
  Icon4,
  Icon2,
  Icon,
  Icon6,
  Icon7,
  Icon3,
  Icon5
  // Add more icon URLs as needed
];

const InfiniteScrolll: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      const cloneNodes = () => {
        const images = scrollElement.children;
        const totalImages = images.length;

        // Calculate the width of a single image
        const imageWidth = images[0].clientWidth;
        const totalWidth = totalImages * imageWidth;

        // Clone the nodes to create a seamless loop
        for (let i = 0; i < totalImages; i++) {
          const clone = images[i].cloneNode(true);
          scrollElement.appendChild(clone);
        }

        // Adjust the width of the scrollable container
        scrollElement.style.width = `${totalWidth}px`;
      };

      cloneNodes();
    }
  }, []);

  return (
    <div className="overflow-hidden" style={background}>
      <div ref={scrollRef} className="mt-4 mb-10 flex animate-scrolll gap-40">
        {[...Array(icons.length * 2)].map((_, index) => (
          <div key={index} className="flex-none">
            {/* Using Image component for rendering the icons */}
            <Image src={icons[index % icons.length]} alt={`Icon ${index}`} width={70} height={70} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScrolll;
