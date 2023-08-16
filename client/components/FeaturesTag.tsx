import React from "react";
import { Interface } from "readline";
import CodingTag from "./CodingTag";
import QuetionsSvg from "./QuetionsSvg";

interface props {
  title: string;
  desc: string;
  tag: string;
}
const FeaturesTag = ({ title, desc, tag }: props) => {
  return (
    <div
      style={{}}
      className=" w-full lg:max-w-[400px] cursor-pointer bg-white shadow-md rounded-lg  hover:shadow-[#626ee3] p-4 flex flex-col gap-y-4 items-center"
    >
      {tag === "question" ? (
        <QuetionsSvg />
      ) : tag === "coding" ? (
        <CodingTag />
      ) : null}
      <p className="text-[20px] font-normal text-[#02203c] leading-[1.3] ">
        {title}
      </p>
      <p className="text-[#445d6e] text-[14px] leading-[1.7] ">{desc}</p>
      <p className="text-[#626ee3] text-[14px]">Learn more </p>
    </div>
  );
};

export default FeaturesTag;
