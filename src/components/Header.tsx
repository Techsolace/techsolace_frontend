"use client";
import {
  ArrowRightAltOutlined,
  KeyboardArrowDownRounded,
  PersonOutline,
  Phone,
  SegmentOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "@/../public/logo.gif";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="w-full p-6 fixed z-50">
        <div className="max-w-[1150px] m-auto">
          <div className="flex flex-wrap items-center">
            <div className="flex-[1]">
              <Image
                src={Logo}
                alt="Logo"
                width={1700}
                height={1000}
                className="w-[180px]"
              />
            </div>
            <div className="flex-[1] hidden lg:block">
              <nav className="flex justify-between p-2">
                <Link href="#" className="font-Inter font-semibold text-sm">
                  Work
                </Link>
                <Link href="#" className="font-Inter font-semibold text-sm">
                  Services
                </Link>
                <Link href="#" className="font-Inter font-semibold text-sm">
                  Clients
                </Link>
                <Link href="#" className="font-Inter font-semibold text-sm">
                  About <KeyboardArrowDownRounded />
                </Link>
              </nav>
            </div>
            <div className="flex-[1] block lg:hidden">
              <div className="flex justify-end">
                <button onClick={toggleSidebar}>
                  <SegmentOutlined />
                </button>
              </div>
            </div>
            <div className="flex-[1] hidden lg:block">
              <div className="flex justify-end gap-4">
                <Link
                  href="#"
                  className="py-2 px-[9px] border-[1px] bg-zinc-800 shadow-xl border-zinc-800 rounded-full text-white"
                >
                  <Phone />
                </Link>
                <Link
                  href="#"
                  className="transition font-Inter hover:shadow-none py-2 px-4 text-sm border-yellow-400 flex items-center justify-center font-regular border-[1px] rounded-full text-zinc-800
                    bg-yellow-400 gap-1 shadow-xl"
                >
                  Join Our <span className="font-bold">Hub.</span>{" "}
                  <ArrowRightAltOutlined />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-[100] transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar}>
            <SegmentOutlined />
          </button>
        </div>
        <nav className="flex flex-col p-4">
          <Link href="#" className="font-Inter font-semibold text-sm p-2">
            Work
          </Link>
          <Link href="#" className="font-Inter font-semibold text-sm p-2">
            Services
          </Link>
          <Link href="#" className="font-Inter font-semibold text-sm p-2">
            Clients
          </Link>
          <Link href="#" className="font-Inter font-semibold text-sm p-2">
            About
          </Link>
        </nav>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Header;
