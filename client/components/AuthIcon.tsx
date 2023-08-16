import React from "react";
import FacebookSvg from "./FacebookSvg";
import GithubSvg from "./GithubSvg";
import GoogleSvg from "./GoogleSvg";
import LinkedinSvg from "./LinkedinSvg";

interface props {
  title: string;
  tag: string;
  color: string;
}
const AuthIcon = ({ title, tag, color }: props) => {
  return (
    <div
      style={{ background: color }}
      className=" h-[50px]  w-full rounded-lg cursor-pointer "
    >
      <div className="w-[70%] flex justify-between items-center px-[2px] py-[2px]">
        {tag === "google" ? (
          <GoogleSvg />
        ) : tag === "github" ? (
          <GithubSvg />
        ) : tag === "facebook" ? (
          <FacebookSvg />
        ) : tag === "linkedin" ? (
          <LinkedinSvg />
        ) : null}

        <p className="text-white text-[14px] font-bold ">{title}</p>
      </div>
    </div>
  );
};

export default AuthIcon;
