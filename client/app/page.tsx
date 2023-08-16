"use client";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import FeaturesTag from "@/components/FeaturesTag";
import AuthUi from "@/components/AuthUi";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [showAuthLogin, setShowAuthLogin] = useState(false);
  const toggleAuthLogin = () => {
    setShowAuthLogin((prev) => !prev);
  };
  return (
    <>
      <Navbar toggle={toggleAuthLogin} />
      {showAuthLogin && <AuthUi toggle={toggleAuthLogin} />}
      <div className="  bg-white text-black flex flex-col items-center justify-center p-10 gap-6">
        <p>What is Coding Riddles?</p>
        <div className="flex flex-col lg:flex-row gap-6">
          <FeaturesTag
            title="50+ Picked algorithms"
            tag="question"
            desc="Coding interview prep is a numbers game that many candidates lose.
            We decided to build a system that allows you solve this problem on
            your spare time, solve with other devs (multiplayer) etc"
          />
          <FeaturesTag
            title="Solution in different languages"
            tag="coding"
            desc="We Support diverse languages to allow devs of different languages to solve problems and become better developers "
          />
        </div>
      </div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(-90deg, rgb(2, 32, 60), rgb(0, 21, 40))",
        }}
        className="min-h-[50vh] py-10 px-10 text-white flex flex-col gap-y-6"
      >
        <p className="text-[35px] font-normal leading-[1.3]">
          A better way to become a better dev!
        </p>
        <p className="text-[16px] font-normal leading-[1.7]">
          Join Us and begin your journey to the land of mastery .{" "}
        </p>
        <p className="text-[16px] font-normal leading-[1.7]">
          Make friends with Top G developers
        </p>
        <p className="text-[16px] font-normal leading-[1.7]">
          You can add your CodingRiddles profile to your portfolio!
        </p>
        <button
          onClick={() => toggleAuthLogin()}
          className="bg-[#626ee3]  w-[200px] py-4 mt-10 shadow-[0_2px_5px_0_rgb(0,0,0/50%)] rounded-lg text-[16px]"
        >
          Learn More
        </button>
        <hr className="h-[1px] bg-white" />
        <p className="text-center">Contact Us</p>
        <p className="text-center text-[13px]">
          Copyright © 2023 CodingRiddles. All rights reserved.
        </p>
      </div>
    </>
  );
}
