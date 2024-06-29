"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'; // Import ScrollTrigger from the correct path
import DoubleArrowOutlinedIcon from '@mui/icons-material/DoubleArrowOutlined';

gsap.registerPlugin(ScrollTrigger);

const IconRotateAnimation: React.FC = () => {
    const iconRef = useRef<SVGSVGElement>(null); // Use SVGSVGElement for MUI icons

    useEffect(() => {
        const iconElement = iconRef.current;

        if (iconElement) {
            gsap.to(iconElement, {
                rotation: 90, // Rotate to 90 degrees
                scrollTrigger: {
                    trigger: iconElement,
                    start: "top 80%", // Start animation when the top of the element reaches 80% of the viewport
                    end: "bottom 20%", // End animation when the bottom of the element reaches 20% of the viewport
                    scrub: true, // Smoothly animate on scroll
                }
            });
        }
    }, []);

    return (
        <div className="h-screen">
            <DoubleArrowOutlinedIcon ref={iconRef} style={{ fontSize: 58 }} className='text-zinc-200' />
        </div>
    );
};

export default IconRotateAnimation;
